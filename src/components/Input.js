import React, { useRef } from 'react';

const Input = (props) => {
  const inputRef = useRef(null);
  const { handleAddTodo } = props;

  const addTodoFromInput = () => {
    const { value } = inputRef.current;

    if (value.trim()) {
      handleAddTodo(value);
      inputRef.current.value = '';
    }
  };

  return (
    <div className='Input'>
      <input type='text' placeholder='Add to-do here...' ref={inputRef} />
      <button className='add' onClick={addTodoFromInput}>
        Add <i className='fas fa-plus'></i>
      </button>
    </div>
  );
};

export default Input;
