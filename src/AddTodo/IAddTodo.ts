import { ITodoModel } from '../Data';

export interface IAddTodo {
  addTodoCallback: (todo: ITodoModel) => void;
  onCancelCallback: () => void;
}
