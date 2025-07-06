type Data = {
  task: string;
  key: number;
};

export default function TodoBox({ task, key }: Data) {
  return (
    <div className="flex justify-between w-50" key={key}>
      <p>{task}</p>
      <button className="cursor-pointer bg-none">x</button>
    </div>
  );
}
