import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atom";

function Todo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prevToDos) => {
      const targetIndex = prevToDos.findIndex((item) => item.id === id);
      const targetItem = prevToDos[targetIndex];
      const newItem = {
        ...targetItem,
        category: name as any,
      };
      const newToDos = [
        ...prevToDos.slice(0, targetIndex),
        newItem,
        ...prevToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem("todos", JSON.stringify(newToDos));
      return newToDos;
    });
  };

  const Delete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((prevToDos) => {
      const newTODOS = prevToDos.filter((item) => item.id !== id);
      return newTODOS;
    });
  };
  return (
    <>
      <li>
        <span>{text}</span>
        {category !== Categories.TO_DO && (
          <button name={Categories.TO_DO} onClick={onClick}>
            To Do
          </button>
        )}
        {category !== Categories.IN_PROGRESS && (
          <button name={Categories.IN_PROGRESS} onClick={onClick}>
            IN_PROGRESS
          </button>
        )}
        {category !== Categories.DONE && (
          <button name={Categories.DONE} onClick={onClick}>
            Done
          </button>
        )}
        <button onClick={Delete}>DEL</button>
      </li>
    </>
  );
}
export default Todo;
