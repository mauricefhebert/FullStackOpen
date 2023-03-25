import { useState } from "react";

// useState hook
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   setTimeout(() => setCounter(counter + 1), 1000);

//   return <div>{counter}</div>;
// };

// useState hook with event handler with a handleClick function define out side of the button
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={handleClick}>plus</button>
//     </div>
//   );
// };

// useState hook with event handler with a handleClick function define on the button
// const App = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <div>{counter}</div>
//       {/* Increase the counter */}
//       <button onClick={() => setCounter(counter + 1)}>Increase</button>
//       {/* Decrease the counter */}
//       <button onClick={() => setCounter(counter - 1)}>Decrease</button>
//       {/* Reset the counter */}
//       <button onClick={() => setCounter(0)}>Reset</button>
//     </div>
//   );
// };

// useState with function pass as reference in the button
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increase = () => {
//     setCounter(counter + 1);
//   };

//   const decrease = () => {
//     setCounter(counter - 1);
//   };

//   const reset = () => setCounter(0);

//   return (
//     <div>
//       <div>{counter}</div>
//       {/* Increase the counter */}
//       <button onClick={increase}>Increase</button>
//       {/* Decrease the counter */}
//       <button onClick={decrease}>Decrease</button>
//       {/* Reset the counter */}
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

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
