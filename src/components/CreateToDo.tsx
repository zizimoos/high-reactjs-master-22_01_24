import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atom";
import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

const CreateToDo = () => {
  const category = useRecoilValue(categoryState);
  const [toDo, setToDo] = useRecoilState(toDoState);
  const { register, handleSubmit, setError, formState, setValue } =
    useForm<IForm>();

  const onValid = ({ todo }: IForm) => {
    setToDo((prevTodo) => [
      { text: todo, category: category, id: Date.now() },
      ...prevTodo,
    ]);
    console.log(toDo);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("todo", {
          required: {
            value: true,
            message: "Todo is required",
          },
          validate: {
            maxlength: (value) => {
              return value.length < 50
                ? true
                : "Todo must be less than 50 characters";
            },
          },
        })}
        placeholder="Write a to do"
      />
      <span>{formState?.errors?.todo?.message}</span>
      <button>ADD</button>
    </form>
  );
};
export default CreateToDo;
