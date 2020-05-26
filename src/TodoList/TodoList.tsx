import React, { FC, useState, useEffect } from 'react';
import { Todo } from '../Todo/Todo';
import { todoData, ITodoModel } from './../Data';
import { ITodo } from '../Todo/ITodo';
import './TodoList.css';

export const TodoList: FC = () => {
  const [todos, setTodos] = useState<ITodoModel[]>();

  useEffect(() => {
    setTodos(todoData);
  }, []);

  const deleteCallback = (id: number) => {
    setTodos(todos?.filter((x) => x.id != id));
  };

  return (
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
          />
        );
      })}
    </div>
  );
};
