import {useDrag, useDrop} from 'react-dnd';

function ResumeBox({resume, id, text, index, move}) {
  const [{isDragging}, drag] = useDrag(
    () => ({
      type: 'Resume',
      item: {id, index},
      collect: monitor => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [id, index, move]
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'Resume',
      drop: () => move(resume, index),
    }),
    [move]
  );

  return (
    <div ref={drop} style={{opacity: isDragging ? '0.3' : '1'}}>
      <div ref={drag}>{text}</div>
    </div>
  );
}

export default ResumeBox;
