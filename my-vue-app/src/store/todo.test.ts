import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {clearTodos, upsertTodo, useTodos} from "./todo.ts";
import { createMockTodo } from "@/model/Todo.mock.ts";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

beforeEach(() => {
    clearTodos()
})

describe("todo-store", () => {
  it("is initially empty", () => {
    expect(useTodos().value).toHaveLength(0);
  });

  describe("upsertTodo", () => {
    it("adds a new todo", () => {
      const todos = useTodos();
      const todo = createMockTodo({
        id: "5",
        description: "todo 1",
        title: "todo 1",
      });
      upsertTodo(todo);

      expect(todos.value).toEqual([todo]);
    });

      it("updates a todo with the same id", () => {
          const todos = useTodos();
          upsertTodo(createMockTodo({
              id: "5",
              description: "old description",
              title: "old title",
          }));
          let newTodo = createMockTodo({
              id: "5",
              description: "new description",
              title: "new title",
          });
          upsertTodo(newTodo);

          expect(todos.value).toEqual([newTodo]);
      });
  });
});
