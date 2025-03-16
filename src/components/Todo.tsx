import { useState } from "react";
import Form from "./Form";
import ListItems from "./ListItems";
export default function Todo() {
  const [todos, setTodos] = useState<{ text: string; done: boolean }[]>([]);

  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-5xl"> todo app</h1>
        <Form setTodos={setTodos} />
        <ListItems todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}
