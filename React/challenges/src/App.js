import "./App.css";
import { useState, useEffect } from "react";

// *** FIRST CHALLENGE COMPLETED
// const DateCounter = () => {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(1);

//   const handleIncrement = () => setStep((count) => count + 1);
//   const handleDecrement = () => setStep((count) => count - 1);
//   const handleCountIncrement = () => setCount((count) => count + step);
//   const handleCountDecrement = () => setCount((count) => count - step);

//   const getDate = (count) => {
//     const today = new Date();
//     const newDate = new Date(today);
//     newDate.setDate(today.getDate() + count);
//     return newDate.toLocaleDateString();
//   };

//   return (
//     <div>
//       <button onClick={handleDecrement}>-</button>
//       <span>Step: {step}</span>
//       <button onClick={handleIncrement}>+</button>
//       <div>
//         <button onClick={handleCountDecrement}>-</button>
//         <span>Count: {count}</span>
//         <button onClick={handleCountIncrement}>+</button>
//       </div>
//       <div>
//         {count === 0
//           ? `Today is ${getDate(count)}`
//           : count > 0
//           ? `${count} days from today is ${getDate(count)}`
//           : count === -1
//           ? `Yesterday was ${getDate(count)}`
//           : count < -1
//           ? `${Math.abs(count)} days before was ${getDate(count)}`
//           : `Nesto`}
//       </div>
//       <div>Neki div</div>
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//     </div>
//   );
// };
// *** FIRST CHALLENGE COMPLETED

// !! SECOND CHALLENGE FINISHED

// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element",
//   },
// ];

// function FlashCards() {
//   const [selectedId, setSelectedId] = useState(null);
//   const handleClick = (id) => {
//     setSelectedId(id);
//   };
//   return (
//     <div className="flashcards">
//       {questions.map((q) => (
//         <div
//           key={q.id}
//           onClick={() => handleClick(q.id)}
//           className={selectedId === q.id ? "selected" : ""}
//         >
//           <p> {selectedId === q.id ? q.answer : q.question} </p>
//         </div>
//       ))}
//     </div>
//   );
// }

//**  THIRD CHALLENGE

// const DateCounter = () => {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(1);

//   const handleCountIncrement = () => setCount((count) => count + step);
//   const handleCountDecrement = () => setCount((count) => count - step);

//   const getDate = (count) => {
//     const today = new Date();
//     const newDate = new Date(today);
//     newDate.setDate(today.getDate() + count);
//     return newDate.toLocaleDateString();
//   };
//   const handleReset = () => {
//     setCount(0);
//     setStep(1);
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={(e) => setStep(() => Number(e.target.value))}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={handleCountDecrement}>-</button>
//         <input
//           type="number"
//           value={count}
//           onChange={(e) => setCount(() => Number(e.target.value))}
//         />

//         <button onClick={handleCountIncrement}>+</button>
//       </div>
//       <div>
//         {count === 0
//           ? `Today is ${getDate(count)}`
//           : count > 0
//           ? `${count} days from today is ${getDate(count)}`
//           : count === -1
//           ? `Yesterday was ${getDate(count)}`
//           : count < -1
//           ? `${Math.abs(count)} days before was ${getDate(count)}`
//           : `Nesto`}
//       </div>
//       {(count !== 0 || step !== 1) && (
//         <div>
//           <button onClick={handleReset}>Reset</button>
//         </div>
//       )}
//     </div>
//   );
// };

// !!! THIRD CHALLENGE FINISHED

// *** FOURTH CHALLENGE - TIP CALCULATOR
// function App() {
//   return (
//     <div className="App">
//       <BillSum />
//       <Service />
//       <FriendService />
//       <Stats />
//       <Reset />
//       {/* <DateCounter /> */}
//       {/* <FlashCards /> */}
//     </div>
//   );
// }

// function BillSum() {
//   const [bill, setBill] = useState(0);
//   function handleInput() {
//     setBill((e) => Number(e.target.value));
//   }
//   return (
//     <div>
//       <h3>How much was the bill ?</h3>
//       <input type="number" value={bill} onChange={handleInput} />
//     </div>
//   );
// }
// function Service() {
//   return (
//     <div>
//       <h3>How did you like the service ?</h3>
//       <select type="number" name="" id="">
//         <option value="dissatisfied">Dissatisfied (0%)</option>
//         <option value="ok">It was ok (5%)</option>
//         <option value="good">It was good (10%)</option>
//         <option value="amazing">Absolutely amazing (20%)</option>
//       </select>
//     </div>
//   );
// }
// function FriendService() {
//   return (
//     <div>
//       <h3>How did your friend like the service?</h3>
//       <select type="number" name="" id="">
//         <option value="dissatisfied">Dissatisfied (0%)</option>
//         <option value="ok">It was ok (5%)</option>
//         <option value="good">It was good (10%)</option>
//         <option value="amazing">Absolutely amazing (20%)</option>
//       </select>
//     </div>
//   );
// }
// function Stats() {
//   return (
//     <div>
//       <h2>You pay X ( X + X tip )</h2>
//     </div>
//   );
// }

// function Reset() {
//   return (
//     <div>
//       <button type="button">RESET</button>
//     </div>
//   );
// }
//! FOURTH CHALLENGE FINISHED

//* FIFTH CHALLENGE :
// export default function App() {
//   return (
//     <div>
//       <TextExpander>
//         Space travel is the ultimate adventure! Imagine soaring past the stars
//         and exploring new worlds. It's the stuff of dreams and science fiction,
//         but believe it or not, space travel is a real thing. Humans and robots
//         are constantly venturing out into the cosmos to uncover its secrets and
//         push the boundaries of what's possible.
//       </TextExpander>

//       <TextExpander
//         collapsedNumWords={20}
//         expandButtonText="Show text"
//         collapseButtonText="Collapse text"
//         buttonColor="#ff6622"
//       >
//         Space travel requires some seriously amazing technology and
//         collaboration between countries, private companies, and international
//         space organizations. And while it's not always easy (or cheap), the
//         results are out of this world. Think about the first time humans stepped
//         foot on the moon or when rovers were sent to roam around on Mars.
//       </TextExpander>

//       <TextExpander expanded={true} className="box">
//         Space missions have given us incredible insights into our universe and
//         have inspired future generations to keep reaching for the stars. Space
//         travel is a pretty cool thing to think about. Who knows what we'll
//         discover next!
//       </TextExpander>
//     </div>
//   );
// }

// function TextExpander({
//   children,
//   collapsedNumWords = 10,
//   expandButtonText = "Show text",
//   collapseButtonText = "Show less",
//   buttonColor = "blue",
//   expanded = false,
//   className,
// }) {
//   const [isExpanded, setIsExpanded] = useState(expanded);
//   function HandleClick() {
//     setIsExpanded(!isExpanded);
//   }
//   const buttonStyle = {
//     color: buttonColor,
//     backgroundColor: "inherit",
//     border: "none",
//     paddingLeft: "0px",
//   };
//   return (
//     <div className={className}>
//       {isExpanded
//         ? children
//         : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."}
//       <button style={buttonStyle} onClick={HandleClick}>
//         {isExpanded ? collapseButtonText : expandButtonText}
//       </button>
//     </div>
//   );
// }
//! FIFTH CHALLENGE FINISHED
//* SIXTH CHALLENGE
export default function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [amount, setAmount] = useState("10");
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    async function getConvertedValues() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyFrom}&to=${currencyTo}`
      );
      const data = await res.json();
      setConvertedValue(Number(data.rates[currencyTo]));
    }
    if (currencyFrom === currencyTo) return setConvertedValue(amount);
    getConvertedValues();
  }, [amount, currencyFrom, currencyTo]);

  function handleConvertFrom(e) {
    setCurrencyFrom(e.target.value);
  }
  function handleConvertTo(e) {
    setCurrencyTo(e.target.value);
  }
  function handleAmountChange(e) {
    setAmount(e.target.value);
  }
  return (
    <div>
      <AmountInput amount={amount} handleAmountChange={handleAmountChange} />
      <CurrencyFrom
        currencyFrom={currencyFrom}
        handleConvertFrom={handleConvertFrom}
      />
      <CurrencyTo labelTo={currencyTo} handleConvertTo={handleConvertTo} />
      <AmountOutput convertedValue={convertedValue} currencyTo={currencyTo} />
    </div>
  );
}

function CurrencyFrom({ currencyFrom, handleConvertFrom }) {
  return (
    <select value={currencyFrom} onChange={handleConvertFrom}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function CurrencyTo({ currencyTo, handleConvertTo }) {
  return (
    <select value={currencyTo} onChange={handleConvertTo}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function AmountInput({ amount, handleAmountChange }) {
  console.log(amount);
  return <input type="text" value={amount} onChange={handleAmountChange} />;
}
function AmountOutput({ convertedValue, currencyTo }) {
  return (
    <p>
      {convertedValue} {currencyTo}
    </p>
  );
}
