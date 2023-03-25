import { React, useState } from "react";
import "./App.css";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [anecdoteVote, setAnecdoteVote] = useState(
    new Array(anecdotes.length).fill(0)
  );
  const anecdoteWithMostVote =
    anecdotes[
      anecdoteVote.indexOf(
        anecdoteVote.reduce((a, b) => Math.max(a, b), -Infinity)
      )
    ];

  const handleClick = () => {
    const newAnecdoteVote = [...anecdoteVote];
    newAnecdoteVote[selected] += 1;
    setAnecdoteVote(newAnecdoteVote);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>Vote: {anecdoteVote[selected]}</div>
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }>
        Next anecdote
      </button>
      <button onClick={handleClick}>vote</button>
      <h2>Anecdote with the most votes</h2>
      <div>{anecdoteWithMostVote}</div>
    </>
  );
}

export default App;
