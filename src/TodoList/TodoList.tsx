import React, { FC, useState, useEffect } from 'react';
import { Todo } from '../Todo/Todo';
import { todoData } from './../Data';
import { ITodo } from '../Todo/ITodo';

export const TodoList: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>();

  useEffect(() => {
    setTodos(todoData);
  }, []);

  return (
    <div>
      {todos?.map((x: ITodo) => {
        return (
          <Todo
            title={x.title}
            description={x.description}
            date={x.date}
            completed={x.completed}
          />
        );
      })}
    </div>
  );
};
