import { ITodo } from './Todo/ITodo';
import * as faker from 'faker';

export interface ITodoModel {
  title: string;
  description: string;
  date: number;
  completed: boolean;
  id: number;
}

export const todoData: ITodoModel[] = [
  {
    title: faker.random.word(),
    description: faker.lorem.sentence(),
    date: faker.random.number(),
    completed: false,
    id: faker.random.number(),
  },
  {
    title: faker.random.word(),
    description: faker.lorem.sentence(),
    date: faker.random.number(),
    completed: false,
    id: faker.random.number(),
  },
  {
    title: faker.random.word(),
    description: faker.lorem.sentence(),
    date: faker.random.number(),
    completed: false,
    id: faker.random.number(),
  },
  {
    title: faker.random.word(),
    description: faker.lorem.sentence(),
    date: faker.random.number(),
    completed: false,
    id: faker.random.number(),
  },
  {
    title: faker.random.word(),
    description: faker.lorem.sentence(),
    date: faker.random.number(),
    completed: false,
    id: faker.random.number(),
  },
];
