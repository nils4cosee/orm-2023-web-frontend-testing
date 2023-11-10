import { Todo } from "./Todo.ts";
import { nanoid } from "nanoid";

export function createMockTodo(todo: Partial<Todo>): Todo {
  return {
    id: nanoid(4),
    title: "Todo title",
    description: "Todo description",
    ...todo
  };
}
