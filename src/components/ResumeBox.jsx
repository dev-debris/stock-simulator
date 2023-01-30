import {useDrag, useDrop} from 'react-dnd';

function ResumeBox({id, text, index, moveResume, findResume}) {
  const [{isDragging}, drag] = useDrag(
    () => ({
      type: 'Resume',
      item: {id, index},
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, index]
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'Resume',
      hover: item => {
        if (item.id !== id) {
          const {index} = findResume(id);
          moveResume(item.id, index);
        }
      },
    }),
    [id, index, moveResume, findResume]
  );

  return (
    <div ref={drop} style={{opacity: isDragging ? '0.3' : '1'}}>
      <div ref={drag}>{text}</div>
    </div>
  );
}

export default ResumeBox;
