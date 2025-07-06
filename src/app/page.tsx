"use client";
import { useState } from "react";
import TodoBox from "./TodoBox";

export default function Home() {
  const [textValue, setTextValue] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>(["test"]);

  return (
    <main>
      <h1 className="text-2xl mt-10 ml-5">TODO LIST</h1>
      <div>
        <p>Add task</p>
        <input
          type="text"
          name=""
          id="task-input"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button
          onClick={() => {
            setTasks((t) => [...t, textValue]);
            setTextValue("");
          }}
        >
          add
        </button>
      </div>
      <div className="mt-5 ml-10">
        {tasks.map((task: string, key: number) => {
          return <TodoBox task={task} key={key} />;
        })}
      </div>
    </main>
  );
}
