import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  const toggleIsActive = () => setIsActive(!isActive);
  return (
    <div>
      <button className="close" onClick={toggleIsActive}>
        &times;
      </button>
      {isActive && (
        <div className="steps">
          <>
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step {step}:{messages[step - 1]}{" "}
            </p>
            <div className="buttons">
              <Button
                bgColor="#7950f2"
                textColor="#fff"
                onClick={handlePrevious}
              >
                <span>👈</span> Previous
              </Button>

              <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                <span>👉</span> Next
              </Button>
            </div>
          </>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
