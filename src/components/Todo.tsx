import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [submittedNames, setSubmittedNames] = useState<
    { text: string; done: boolean }[]
  >([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (todo) {
      setSubmittedNames((prev) => [...prev, { text: todo, done: false }]); // ახალი todo ობიექტი, რომელიც არ არის გაკეთებული
      setTodo(""); // ტექსტი გასუფთავდეს input-ში
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function toggleDone(index: number) {
    setSubmittedNames((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
    console.log(submittedNames);
  }

  function deleteTodo(index: number) {
    setSubmittedNames((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="border"
          type="text"
          onChange={handleChange}
          value={todo}
        />
        <button type="submit">submit</button>
      </form>

      {submittedNames.map((item, index) => (
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
