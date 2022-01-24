import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState, toDoSelector, categoryState, Categories } from "../atom";
import Todo from "./Todo";

function ToDoList() {
  const selectedCategory = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as any);
  };
  return (
    <div>
      <h1>Write todos</h1>

      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>TODO</option>
        <option value={Categories.IN_PROGRESS}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <hr />
      <CreateToDo />
      {selectedCategory.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ToDoList;
