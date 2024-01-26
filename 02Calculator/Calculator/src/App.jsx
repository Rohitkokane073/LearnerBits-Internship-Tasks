import { useState } from "react";
import "./App.css";

function App() {
  const [cal, setCal] = useState("");

  const handle = (e) => {
    console.log(e.target.innerText);
    const temp = cal;
    setCal(temp + e.target.innerText);
  };
  const solve = (e) => {
    setCal(eval(cal));
  };
  const Del = () => {
    setCal(cal.slice(0, -1));
  };
  const clearDisp = () => {
    setCal("");
  };
  return (
    <>
      <div className="container">
        <h1>Casio</h1>
        <div>
          <div className="input" >{cal}</div>
        </div>
        <div className="keys">
          <div className="input-key">
            <button onClick={clearDisp} className="btn-golden">
              AC
            </button>
            <button onClick={Del} className="btn-golden">
              DEL
            </button>
            <button onClick={handle} className="btn-golden">
              %
            </button>
            <button onClick={handle} className="btn-golden">
              /
            </button>
          </div>
          <div className="input-key">
            <button onClick={handle} className="btn">
              7
            </button>
            <button onClick={handle} className="btn">
              8
            </button>
            <button onClick={handle} className="btn">
              9
            </button>
            <button onClick={handle} className="btn-golden">
              *
            </button>
          </div>
          <div className="input-key">
            <button onClick={handle} className="btn">
              4
            </button>
            <button onClick={handle} className="btn">
              5
            </button>
            <button onClick={handle} className="btn">
              6
            </button>
            <button onClick={handle} className="btn-golden">
              -
            </button>
          </div>
          <div className="input-key">
            <button onClick={handle} className="btn">
              1
            </button>
            <button onClick={handle} className="btn">
              2
            </button>
            <button onClick={handle} className="btn">
              3
            </button>
            <button onClick={handle} className="btn-golden">
              +
            </button>
          </div>
          <div className="input-key">
            <button onClick={handle} className="btn">
              00
            </button>
            <button onClick={handle} className="btn">
              0
            </button>
            <button onClick={handle} className="btn">
              .
            </button>
            <button onClick={solve} className="btn-golden">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
