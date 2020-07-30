import React, { FC, useState, useEffect } from 'react';
import { Todo } from '../Todo/Todo';
import { todoData, ITodoModel } from './../Data';
import { ITodo } from '../Todo/ITodo';
import './TodoList.css';
import { AddTodo } from '../AddTodo/AddTodo';

export const TodoList: FC = () => {
  const [todos, setTodos] = useState<ITodoModel[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<ITodoModel | null>(null);

  useEffect(() => {
    setTodos(todoData);
  }, []);

  const deleteCallback = (id: number) => {
    setTodos(todos?.filter((x) => x.id != id));
  };

  const onAdd = (todoToAdd: ITodoModel): void => {
    const currentTodos = [...todos, todoToAdd];
    setTodos(currentTodos);
    setIsAddModalOpen(false);
  };

  const onEdit = (id: number): void => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setSelectedTodo(todoToEdit);
    }
  };

  const onCancel = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div>
      <button className='modal-button' onClick={() => setIsAddModalOpen(true)}>
        +
      </button>
      <div className='list-container'>
        {todos?.map((x: ITodoModel) => {
          return (
            <Todo
              title={x.title}
              description={x.description}
              date={x.date}
              completed={x.completed}
              id={x.id}
              onDelete={deleteCallback}
              onEdit={onEdit}
            />
          );
        })}
        {isAddModalOpen && (
          <div className='overlay'>
            <div className='dialog'>
              <h1>Add TODO</h1>
              <AddTodo addTodoCallback={onAdd} onCancel={onCancel} />
            </div>
          </div>
        )}
        {selectedTodo && (
          <div className='overlay'>
            <div className='dialog'>
              <h1>Edit TODO</h1>
              <div>Our component</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
