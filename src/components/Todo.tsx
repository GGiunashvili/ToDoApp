import { useState } from "react";
import Form from "./Form";
import ListItems from "./ListItems";
export default function Todo() {
  const [todos, setTodos] = useState<{ text: string; done: boolean }[]>([]);

  return (
    <>
      <Form setTodos={setTodos} />
      <ListItems todos={todos} setTodos={setTodos} />
    </>
  );
}
