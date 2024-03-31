import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <DateCounter />
    </div>
  );
}

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const handleIncrement = () => setStep((count) => count + 1);
  const handleDecrement = () => setStep((count) => count - 1);
  const handleCountIncrement = () => setCount((count) => count + step);
  const handleCountDecrement = () => setCount((count) => count - step);

  const getDate = (count) => {
    const today = new Date();
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + count);
    return newDate.toLocaleDateString();
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>Step: {step}</span>
      <button onClick={handleIncrement}>+</button>
      <div>
        <button onClick={handleCountDecrement}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountIncrement}>+</button>
      </div>
      <div>
        {count === 0
          ? `Today is ${getDate(count)}`
          : count > 0
          ? `${count} days from today is ${getDate(count)}`
          : count === -1
          ? `Yesterday was ${getDate(count)}`
          : count < -1
          ? `${Math.abs(count)} days before was ${getDate(count)}`
          : `Nesto`}
      </div>
      <div>Neki div</div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default App;
