import React from "react";

interface Todo {
  text: string;
  done: boolean;
}

interface ListItemsProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function ListItems({ todos, setTodos }: ListItemsProps) {
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
    <div className="flex flex-col justify-center items-center w-[600px] mx-auto p-[10px] bg-red-900 ">
      {todos.map((item: Todo, index: number) => (
        <div
          key={index}
          className="flex justify-between w-full bg-amber-300 p-[10px]"
        >
          <h1
            onClick={() => toggleDone(index)}
            className={` ${item.done ? "line-through bg-pink-100" : ""}`}
          >
            {item.text}
          </h1>
          <button onClick={() => deleteTodo(index)}>delete</button>
        </div>
      ))}
    </div>
  );
}
