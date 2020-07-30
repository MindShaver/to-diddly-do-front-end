import React, { FC } from 'react';
import { ITodo } from './ITodo';
import './Todo.css';

export const Todo: FC<ITodo> = ({
  title,
  description,
  date,
  completed,
  id,
  onDelete,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div>
  <div className='card-wrapper'>
        <div className='card'>
          <h2>{title}</h2>
          <h6>{description}</h6>
          <p>{date}</p>
          <p>{completed}</p>
          <button className='btn-remove' onClick={handleDelete}>
            Remove
          </button>
        </div>
      </div>
    </div>
    
  );
};
