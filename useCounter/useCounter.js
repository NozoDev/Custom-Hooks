import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };

  const reset = () => {
    //tengo que hacer que el reset retorne el valor del initialValue

    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
