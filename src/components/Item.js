import React, { useState } from 'react';

const Item = (props) => {
  const { todo, handleDeleteTodo } = props;
  const [isDone, setIsDone] = useState(false);

  return (
    <div className={`Item d-flex ${isDone ? 'done' : ''}`}>
      <span className='to-do'>{todo.todo}</span>
      <span>
        <button
          className='done'
          disabled={isDone}
          onClick={() => {
            setIsDone(true);
          }}>
          <i className='fas fa-check' />
        </button>
        <button
          className='delete'
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}>
          <i className='fas fa-trash' />
        </button>
      </span>
    </div>
  );
};

export default Item;
