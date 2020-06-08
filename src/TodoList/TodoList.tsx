import React, { FC, useState, useEffect } from 'react';
import { Todo } from '../Todo/Todo';
import { todoData, ITodoModel } from './../Data';
import { ITodo } from '../Todo/ITodo';
import './TodoList.css';
import { AddTodo } from '../AddTodo/AddTodo';

export const TodoList: FC = () => {
  const [todos, setTodos] = useState<ITodoModel[]>([]);

  useEffect(() => {
    setTodos(todoData);
  }, []);

  const deleteCallback = (id: number) => {
    setTodos(todos?.filter((x) => x.id != id));
  };

  const onAdd = (todoToAdd: ITodoModel): void => {
    const currentTodos = [...todos, todoToAdd];
    setTodos(currentTodos);
  };

  return (
    <div className='list-container'>
      <AddTodo addTodoCallback={onAdd} />
      {todos?.map((x: ITodoModel) => {
        return (
          <Todo
            title={x.title}
            description={x.description}
            date={x.date}
            completed={x.completed}
            id={x.id}
            onDelete={deleteCallback}
          />
        );
      })}
    </div>
  );
};
