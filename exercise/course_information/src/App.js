import { useState } from "react";

// Splitting the application into smaller components
const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increase = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decrease = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const reset = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      {/* Increase the counter */}
      <Button handleClick={increase} text="Increase" />
      {/* Decrease the counter */}
      <Button handleClick={decrease} text="Decrease" />
      {/* Reset the counter */}
      <Button handleClick={reset} text="Reset" />
    </div>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default App;
