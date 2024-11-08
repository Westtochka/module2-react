import { useState } from "react";
import { useEffect } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("Counter was mounted!");
  }, []);

  useEffect(() => {
    console.log(`Counter was changed! Current counter is: ${counter}`);
  }, [counter]);

  useEffect(() => {
    console.log(`Counter was changed! Current counter is: ${step}`);
  }, [step]);

  useEffect(() => {
    console.log("Counter and step was changed!");
  }, [counter, step]);

  const handlePlusClick = () => {
    setCounter((prevState) => prevState + step);
    // console.log({ counter });
  };
  const handleMinusClick = () => {
    setCounter((prevState) => prevState - step);
    // console.log({ counter });
  };
  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.wrapper}>
      <div>
        <h1>{counter}</h1>
        <input
          onChange={(e) => {
            setStep(+e.target.value);
          }}
        />

        <div>
          <button onClick={handlePlusClick}>plus</button>
          <button onClick={handleReset}>reset</button>
          <button onClick={handleMinusClick}>minus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
