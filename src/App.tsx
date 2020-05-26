import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { TodoList } from './TodoList/TodoList';

function App() {
  const appClassName = 'App';

  return (
    <div className={appClassName}>
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
