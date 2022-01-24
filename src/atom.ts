import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "IN_PROGRESS" = "IN_PROGRESS",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

const localStorageToDos = localStorage.getItem("todos");
const parsedToDos = JSON.parse(localStorageToDos as any);

export const toDoState = atom<IToDo[]>({
  key: "toDoState",
  default: parsedToDos?.length ? parsedToDos : [],
});

export const categoryState = atom<Categories>({
  key: "categoryState",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const todoSel = get(toDoState);
    const categorySel = get(categoryState);
    return todoSel.filter((todo) => todo.category === categorySel);
  },
});
