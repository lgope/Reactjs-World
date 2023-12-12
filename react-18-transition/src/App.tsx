import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const [isPending, startTransition] = useTransition();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setName(value);

    startTransition(() => {
      const data: string[] = [];
      for (let i = 1; i <= 90000; i++) {
        data.push(`${i} - ${value}`);
      }

      setList(data);
    });
  };

  return (
    <>
      <input type="text" value={name} onChange={handleSearchInput} />
      <br />
      {isPending && <h4>🔃 Loading....</h4>}
      <ul>
        {name && list.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
    </>
  );
}

export default App;
