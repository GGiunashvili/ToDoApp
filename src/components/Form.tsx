import React, { useState } from "react";

interface FormProps {
  setTodos: React.Dispatch<
    React.SetStateAction<{ text: string; done: boolean }[]>
  >;
}

export default function Form({ setTodos }: FormProps) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (todo) {
      setTodos((prev) => [...prev, { text: todo, done: false }]);
      setTodo(""); // Clear input field after adding
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border"
        type="text"
        onChange={handleChange}
        value={todo}
      />
      <button type="submit">submit</button>
    </form>
  );
}
