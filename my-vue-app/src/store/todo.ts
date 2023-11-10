import {Todo} from "@/model/Todo";
import {computed, Ref, ref} from "vue";

const todos: Ref<Todo[]> = ref([])

export function upsertTodo(todo: Todo): Todo {
    todos.value.push(todo)
    return todo
}

export function useTodos() {
    return computed(() => {
        return todos.value
    })
}


export function clearTodos() {
    todos.value = []
}