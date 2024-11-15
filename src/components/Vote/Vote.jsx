import { useState } from "react";
import s from "./Vote.module.css";
const Vote = () => {
  const [voteData, setVoteData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  //   DRY     Don't repeat yourself
  const handleClickByOption = (value) => {
    console.log(value);
    // if (value === "good") {
    //   setVoteData((prev) => ({ ...prev, good: prev.good + 1 }));
    // }
    // if (value === "neutral") {
    //   setVoteData((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
    // }
    // if (value === "bad") {
    //   setVoteData((prev) => ({ ...prev, bad: prev.bad + 1 }));
    // }
    setVoteData((prev) => ({ ...prev, [value]: prev[value] + 1 }));
  };

  return (
    <div>
      <h2>List votes</h2>
      <ul style={{ backgroundColor: "#cf98d5" }}>
        <li>Good:{voteData.good}</li>
        <li>Neutral:{voteData.neutral}</li>
        <li>bad:{voteData.bad}</li>
      </ul>
      <section>
        {Object.keys(voteData).map((option) => (
          <button
            key={option}
            className={s.button}
            onClick={() => handleClickByOption(option)}
          >
            {" "}
            {option}
          </button>
        ))}
        {/* <button
          className={s.button}
          onClick={() => handleClickByOption("good")}
        >
          GOOD
        </button>
        <button
          className={s.button}
          onClick={() => handleClickByOption("neutral")}
        >
          NEUTRAL
        </button>
        <button className={s.button} onClick={() => handleClickByOption("bad")}>
          BAD
        </button> */}
      </section>
    </div>
  );
};

export default Vote;
