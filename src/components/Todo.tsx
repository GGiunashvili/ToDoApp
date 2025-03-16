import { useState } from "react";
import Form from "./Form";

export default function Todo() {
  const [todos, setTodos] = useState<{ text: string; done: boolean }[]>([]);

  function toggleDone(index: number) {
    setTodos((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  }

  function deleteTodo(index: number) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <Form setTodos={setTodos} />
      {todos.map((item, index) => (
        <div key={index} className="flex justify-between w-[200px]">
          <h1
            onClick={() => toggleDone(index)}
            className={`w-full ${item.done ? "line-through bg-amber-900" : ""}`}
          >
            {item.text}
          </h1>
          <button onClick={() => deleteTodo(index)}>delete</button>
        </div>
      ))}
    </>
  );
}
