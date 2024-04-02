import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <DateCounter /> */} <FlashCards />
    </div>
  );
}

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

// ? SECOND CHALLENGE

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (id) => {
    setSelectedId(id);
  };
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          onClick={() => handleClick(q.id)}
          className={selectedId === q.id ? "selected" : ""}
        >
          <p> {selectedId === q.id ? q.answer : q.question} </p>
        </div>
      ))}
    </div>
  );
}

export default App;
