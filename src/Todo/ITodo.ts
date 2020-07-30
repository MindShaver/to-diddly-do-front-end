import { ITodoModel } from '../Data';

export interface ITodo extends ITodoModel {
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}
