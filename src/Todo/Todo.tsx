import React, { FC } from 'react';
import { ITodo } from './ITodo';
import './Todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { findAllInRenderedTree } from 'react-dom/test-utils';

export const Todo: FC<ITodo> = ({
  title,
  description,
  date,
  completed,
  id,
  onDelete,
  onEdit,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  const handleEdit = () => {
    onEdit(id);
  };
  return (
    <div>
      <div className='card-wrapper'>
        <div className='card'>
          <h2>{title}</h2>
          <h6>{description}</h6>
          <p>{date}</p>
          <p>{completed}</p>
          <button onClick={handleEdit}>
            <i className='fa fa-pencil' aria-hidden='true'></i>
          </button>
          <button className='btn-remove' onClick={handleDelete}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
