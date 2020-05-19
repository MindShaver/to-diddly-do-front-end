import React, { FC } from 'react';
import { ITodo } from './ITodo';
import './Todo.css';

export const Todo: FC<ITodo> = ({ title, description, date, completed }) => {
  return (
    <div className='card'>
      <p>{title}</p>
      <p>{description}</p>
      <p>{date}</p>
      <p>{completed}</p>
    </div>
  );
};
