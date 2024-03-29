import { useState } from "react";

export default function App() {
  const [activity, setActivity] = useState(11.5);
  const [duration, setDuration] = useState("");
  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState(null);

  function calcCal() {
    if (duration && weight) {
      const calCalories = ((activity * 3.5 * weight) / 200) * duration;
      setCalories(calCalories);
    }
  }

  return (
    <div className="App">
      <Heading />
      <Activity activity={activity} onSetActivity={setActivity} />
      <Duration duration={duration} onSetDuration={setDuration} />
      <BodyWeight weight={weight} onSetWeight={setWeight} />
      <Button
        weight={weight}
        duration={duration}
        activity={activity}
        calories={calories}
        onClick={calcCal}
      />
      <Result calories={calories} />
      <Reset
        onSetDuration={setDuration}
        onSetWeight={setWeight}
        onSetCalories={setCalories}
      />
    </div>
  );
}

function Heading() {
  return <h1>Calories Burned Calculator</h1>;
}

function Activity({ activity, onSetActivity }) {
  return (
    <div>
      <h3>Activity</h3>
      <select
        value={activity}
        onChange={(e) => onSetActivity(Number(e.target.value))}
      >
        <option value={11.5}>Running</option>
        <option value={8}>Cycling</option>
        <option value={7}>Swimming</option>
        <option value={4.5}>Walking</option>
        <option value={2.5}>Home Activities</option>
      </select>
    </div>
  );
}

function Duration({ duration, onSetDuration }) {
  return (
    <div>
      <h3>Duration (min)</h3>
      <input
        type="number"
        value={duration}
        onChange={(e) => onSetDuration(Number(e.target.value))}
      />
    </div>
  );
}

function BodyWeight({ weight, onSetWeight }) {
  return (
    <div>
      <h3>Body weight (kg)</h3>
      <input
        type="number"
        value={weight}
        onChange={(e) => onSetWeight(Number(e.target.value))}
      />
    </div>
  );
}

function Button({ onClick }) {
  return (
    <div onClick={onClick}>
      <button>Calculate!</button>
    </div>
  );
}

function Result({ calories }) {
  return (
    <div className="result">
      <h3>Result</h3>
      <input type="text" value={Math.ceil(calories) + " kcal" || ""} disabled />
    </div>
  );
}

function Reset({ onSetCalories, onSetDuration, onSetWeight }) {
  function resetAll(e) {
    e.preventDefault();

    onSetCalories(null);
    onSetDuration("");
    onSetWeight("");
  }

  return (
    <div onClick={resetAll}>
      <button>Reset</button>
    </div>
  );
}
