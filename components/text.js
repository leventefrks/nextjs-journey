import { useState } from "react";

const Text = () => {
  const [text, setText] = useState("");

  return (
    <>
      <label
        for="text"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Custom text
      </label>
      <input
        type="text"
        id="text"
        className="w-full p-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Hit me baby one more time!"
        onChange={(event) => setText(event.target.value)}
      />
      <p>{text}</p>
    </>
  );
};

export default Text;
