import { create } from 'zustand';
import type { TodoForm } from './types';
import type {Todo} from './types';
const useTodoStore = create<{
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (id: string, updated: TodoForm) => void;
  deleteTodo: (id: string) => void;
}>(set => ({
  todos: [],
  addTodo: (todo) => set(state => ({ todos: [...state.todos, todo] })),
  updateTodo: (id, updated) =>
    set(state => ({
      todos: state.todos.map(todo => (todo.id === id ? { ...todo, ...updated } : todo))
    })),
  deleteTodo: (id) =>
    set(state => ({ todos: state.todos.filter(todo => todo.id !== id) }))
}));

export default useTodoStore;
