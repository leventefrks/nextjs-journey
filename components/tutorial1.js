// Lifecycle - Tutorial
// https://www.youtube.com/watch?v=yHdX4dCl5CY&list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&index=6&ab_channel=PedroTech
import { useState } from "react";
import Text from "../components/text";

const LifeCycle = () => {
  const [isTextVisible, setTextVisibility] = useState(false);

  return (
    <div className="flex flex-col max-w-3xl py-2 px-6 mx-auto pt-20 py-auto pb-8 flex flex-row justify-around">
      <h1 className="text-center mb-2 text-3xl font-bold">Life Cycles</h1>
      <button
        onClick={() => setTextVisibility((prev) => !prev)}
        className="mb-6 px-4 py-2 font-bold rounded-mg bg-purple-400 text-white"
      >
        Toggle Text
      </button>
      {isTextVisible && <Text />}
    </div>
  );
};

export default LifeCycle;

// Component lifecycles:
// -mounting - updating - unmounting;
