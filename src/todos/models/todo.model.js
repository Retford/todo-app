import { v4 as uuid } from 'uuid';

export class Todo {
  constructor(description) {
    this.id = uuid();
    this.descripcion = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
