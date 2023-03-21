import { TodosCountState } from "@/state/store";
import { useRecoilValue } from "recoil";

export const Count = () => {
  const todos = useRecoilValue<number>(TodosCountState);
  return <h1>{todos}件</h1>;
};
