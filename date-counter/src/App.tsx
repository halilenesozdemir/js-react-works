import { CSSProperties, useState } from "react";

const buttonContainerStyle = { display: "flex", gap: "4px" };
const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleDecrementStep() {
    setStep((curStep) => Math.max(1, curStep - 1));
  }
  function handleIncrementStep() {
    setStep((curStep) => curStep + 1);
  }
  function handleDecrementCount() {
    setCount((curCount) => curCount - step);
  }
  function handleIncrementCount() {
    setCount((curCount) => curCount + step);
  }

  function getDayMessage() {
    if (count === 0) return "Today";
    const dayMessage = count > 0 ? "days from" : "days ago";
    return `${Math.abs(count)} ${dayMessage}`;
  }
  return (
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        <button onClick={handleDecrementStep} disabled={step <= 1}>
          -
        </button>
        <span>Step:{step}</span>
        <button onClick={handleIncrementStep}>+</button>
      </div>
      <div style={buttonContainerStyle}>
        <button onClick={handleDecrementCount}>-</button>
        <span>Count:{count}</span>
        <button onClick={handleIncrementCount}>+</button>
      </div>
      <p>{`${getDayMessage()} ${date.toDateString()}`}</p>
    </div>
  );
}

export default App;
