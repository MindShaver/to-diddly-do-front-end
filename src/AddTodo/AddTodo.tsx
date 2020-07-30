import React, { FC, useState } from "react";
import "./AddTodo.css";
import { IAddTodo } from "./IAddTodo";
import { ITodo } from "../Todo/ITodo";
import * as faker from "faker";
import { ITodoModel } from "../Data";

export const AddTodo: FC<IAddTodo> = ({ addTodoCallback, onCancel }) => {
  const [todoName, setTodoName] = useState<string>("");
  const [todoDescription, setTodoDescription] = useState<string>("");
  const createTodo = (event: any) => {
    event.preventDefault();
    const todo: ITodoModel = {
      title: todoName,
      description: todoDescription,
      date: faker.random.number(),
      completed: false,
      id: faker.random.number(),
    };
    addTodoCallback(todo);
  };

  return (
    <div className="add-todo">
      <form onSubmit={createTodo}>
        <label>
          Todo Name:
          <input
            required
            type="text"
            value={todoName}
            onChange={(e) => {
              setTodoName(e.target.value);
            }}
          />
        </label>
        <label>
          Todo Description:
          <input
            required
            type="text"
            value={todoDescription}
            onChange={(e) => {
              setTodoDescription(e.target.value);
            }}
          />
        </label>
        <div>
          <input className="btn-add" type="submit" value="Add Todo" />
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
