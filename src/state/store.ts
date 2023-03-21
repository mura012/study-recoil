import { Todos } from "@/pages/_app";
import { atom, selector } from "recoil";

export const TodosState = atom<Todos>({
  key: "TodosState",
  default: [
    { id: 1, text: "todo1" },
    { id: 2, text: "todo2" },
    { id: 3, text: "todo3" },
  ],
});

export const TodosCountState = selector<number>({
  key: "TodosCountState",
  get: ({ get }) => {
    const todos = get(TodosState);
    return todos.length;
  },
});
