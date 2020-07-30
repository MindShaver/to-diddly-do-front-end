import React, { FC, useState, useEffect } from "react";
import { Todo } from "../Todo/Todo";
import { todoData, ITodoModel } from "./../Data";
import { ITodo } from "../Todo/ITodo";
import "./TodoList.css";
import { AddTodo } from "../AddTodo/AddTodo";

export const TodoList: FC = () => {
  const [todos, setTodos] = useState<ITodoModel[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTodos(todoData);
  }, []);

  const deleteCallback = (id: number) => {
    setTodos(todos?.filter((x) => x.id != id));
  };

  const onAdd = (todoToAdd: ITodoModel): void => {
    const currentTodos = [...todos, todoToAdd];
    setTodos(currentTodos);
    setIsModalOpen(false);
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="modal-button" onClick={() => setIsModalOpen(true)}>
        +
      </button>
      <div className="list-container">
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
        {isModalOpen && (
          <div className="overlay">
            <div className="dialog">
              <h1>Add TODO</h1>
              <AddTodo addTodoCallback={onAdd} onCancel={onCancel} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
