import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sum = good + neutral + bad;

  const getAverage = () => {
    return sum > 0 ? sum / 3 : 0;
  };

  const getPercentageOfPositiveFeedback = () => {
    if (good > 0 && neutral === 0 && bad === 0) {
      return 100;
    } else if (good > 0 && (neutral > 0 || bad > 0)) {
      return Math.round((good / (good + neutral + bad)) * 100);
    } else return 0;
  };

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <Statistics
        sum={sum}
        good={good}
        neutral={neutral}
        bad={bad}
        average={getAverage()}
        percentage={getPercentageOfPositiveFeedback()}
      />
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ sum, good, neutral, bad, average, percentage }) => {
  if (sum === 0)
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback received</p>
      </div>
    );

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>feedback</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine value={good} text="Good" />
          <StatisticLine value={neutral} text="Neutral" />
          <StatisticLine value={bad} text="Bad" />
          <StatisticLine value={sum} text="All" />
          <StatisticLine value={average} text="Average" />
          <StatisticLine value={percentage + "%"} text="Positive feedback" />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

export default App;
