type Data = {
  task: string;
  i: number;
  handleClick: (key: number) => void;
};

export default function TodoBox({ task, i, handleClick }: Data) {
  return (
    <div className="flex justify-between w-50">
      <p>{task}</p>
      <button className="cursor-pointer bg-none" onClick={() => handleClick(i)}>
        x
      </button>
    </div>
  );
}
