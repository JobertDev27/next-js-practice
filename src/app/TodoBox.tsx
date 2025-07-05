type Data = {
  task: string;
  onClick: (key: number) => void;
  key: number;
};

export default function TodoBox({ task, onClick, key }: Data) {
  return (
    <div className="flex justify-between w-50">
      <p>{task}</p>
      <button className="cursor-pointer bg-none" onClick={() => onClick(key)}>
        x
      </button>
    </div>
  );
}
