import styled from '@emotion/styled';
import {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

const getItems = count =>
  Array.from({length: count}, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `resume ${k}`,
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  background: isDragging ? 'lightgreen' : 'white',

  ...draggableStyle,
});

const queryAttr = 'data-rbd-drag-handle-draggable-id';

function Resume() {
  const [placeholderProps, setPlaceholderProps] = useState({});
  const [items, setItems] = useState(getItems(10));

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    setPlaceholderProps({});
    setItems(items => reorder(items, result.source.index, result.destination.index));
  };

  const onDragUpdate = update => {
    if (!update.destination) {
      return;
    }
    const draggableId = update.draggableId;
    const destinationIndex = update.destination.index;

    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);

    if (!draggedDOM) {
      return;
    }
    const {clientHeight, clientWidth} = draggedDOM;

    const clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children].slice(0, destinationIndex).reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr);
        const marginBottom = parseFloat(style.marginBottom);
        return total + curr.clientHeight + marginBottom;
      }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
    });
  };

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <ResumeBlock>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <ResumeBox>{item.content}</ResumeBox>
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </ResumeBlock>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  max-width: 740px;
  height: 100%;
`;

const ResumeBlock = styled.div`
  padding: 40px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ResumeBox = styled.div`
  padding: 40px;
  height: 10%;
`;

export default Resume;
