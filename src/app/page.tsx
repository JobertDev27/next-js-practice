import { useState } from "react";
import TodoBox from "./TodoBox";

export default function Home() {
  const [task, setTask] = useState<string[]>([]);

  handleClick = (id: number) => {
    setTask(task.filter(task.id));
  };

  return (
    <main>
      <h1 className="text-2xl mt-10 ml-5">TODO LIST</h1>

      <div className="mt-5 ml-10">
        <TodoBox task={"Clean house"} />
      </div>
    </main>
  );
}
