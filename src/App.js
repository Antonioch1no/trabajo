import "./styles.css";
import Pies from "./components/Pies";
import { useEffect, useState } from "react";

export default function App() {
  const [number, setNumber] = useState({ one: 0, two: 0 });
  const [suma, setSuma] = useState();
  useEffect(() => {
    const { one, two } = number;
    setSuma(Number(two) - Number(one));
  }, [number]);
  const handleInput = (event) => {
    const { name, value } = event.target;
    setNumber({ ...number, [name]: value });
  };

  return (
    <div className="App">
      <div className="card">
        <p>medida incial</p>
        <input
          className="input"
          onChange={handleInput}
          name="one"
          value={number.one}
          placeholder="Ingesa un numero (1)"
        />{" "}
        <br />
        <br />
        <p>medida final</p>
        <input
          className="input"
          onChange={handleInput}
          name="two"
          value={number.two}
          placeholder="Ingesa un numero (2)"
        />
        <br />
        <br />
        <p>Resultado en metros</p>
        <input value={(suma * 0.3048).toFixed(3)} />
      </div>
    </div>
  );
}
