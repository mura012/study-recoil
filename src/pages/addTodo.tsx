import { Count } from "@/components/count";
import { TodosState } from "@/state/store";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";

const AddTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useRecoilState(TodosState);
  const handleAdd = () => {
    const newTodo = { id: todos.length + 1, text: todo };
    setTodos([...todos, newTodo]);
    setTodo("");
  };
  return (
    <>
      <h1>Todo追加</h1>
      <Count />
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>追加</button>
      <Link href="/">一覧ページへ</Link>
    </>
  );
};

export default AddTodo;
