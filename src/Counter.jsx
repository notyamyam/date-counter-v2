import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleAddCount() {
    setCount((s) => s + step);
  }

  function handleMinusCount() {
    setCount((s) => s - step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  // const handleNegative = (e) => {
  //   const value = e.target.value;
  //   const numericValue = parseInt(value, 10);

  //   if (!isNaN(numericValue)) {
  //     setCount(numericValue);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col space-y-2  justify-center">
        <div className="flex justify-center items-center space-x-2">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />

          <p className="flex items-center">{step}</p>
        </div>

        <div className="flex justify-center items-center space-x-2 ">
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={handleMinusCount}
          >
            -
          </button>
          <input
            className="border-solid border-2 rounded-lg"
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={handleAddCount}
          >
            +
          </button>
        </div>

        <div className="flex justify-center">
          <p>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span>{date.toDateString()}</span>
          </p>
        </div>

        {count !== 0 || step !== 1 ? (
          <div className="flex justify-center">
            <button
              className="rounded-lg bg-slate-300 px-2 py-1 w-20"
              onClick={() => handleReset()}
            >
              Reset
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Counter;
