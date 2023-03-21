import { useRecoilValue } from "recoil";
import { TodosState } from "@/state/store";
import { Count } from "@/components/count";
import { Todos } from "./_app";
import Link from "next/link";

export default function Home() {
  const todos = useRecoilValue<Todos>(TodosState);
  return (
    <>
      <h1>Todo一覧</h1>
      <Count />
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
      <Link href="/addTodo">Todo追加ページへ</Link>
    </>
  );
}
