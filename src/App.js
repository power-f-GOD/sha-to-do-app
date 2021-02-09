import React, { useState } from 'react';

import Item from './components/Item';
import Input from './components/Input';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevState) => [...prevState, { id: Date.now(), todo }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevState) => {
      const finalState = [...prevState];
      const indexOfTodoToDelete = finalState.findIndex((todo) => todo.id === id);

      finalState.splice(indexOfTodoToDelete, 1);

      return finalState;
    });
  };

  return (
    <div className='App container'>
      <h1 className='text-center'>My To-do App!</h1>
      {todos.map((todo, i) => (
        <Item todo={todo} key={i} handleDeleteTodo={handleDeleteTodo} />
      ))}
      {!todos.length && (
        <div>
          <i className='fas fa-box-open'></i> No to-do's yet.
        </div>
      )}
      <Input handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
