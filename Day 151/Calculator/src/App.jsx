import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-3xl shadow-xl w-96">
        <div className="mb-4 p-6 bg-gray-700 rounded-xl text-right text-white text-3xl font-semibold">
          {input || "0"}
        </div>
        <div className="mb-6 p-6 bg-gray-700 rounded-xl text-right text-green-400 text-3xl font-semibold">
          {result}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {["7", "8", "9", "/"].map((char) => (
            <button
              key={char}
              className="p-6 bg-gray-600 text-white rounded-xl text-2xl hover:bg-gray-500 transition-all"
              onClick={() => handleClick(char)}
            >
              {char}
            </button>
          ))}
          {["4", "5", "6", "*"].map((char) => (
            <button
              key={char}
              className="p-6 bg-gray-600 text-white rounded-xl text-2xl hover:bg-gray-500 transition-all"
              onClick={() => handleClick(char)}
            >
              {char}
            </button>
          ))}
          {["1", "2", "3", "-"].map((char) => (
            <button
              key={char}
              className="p-6 bg-gray-600 text-white rounded-xl text-2xl hover:bg-gray-500 transition-all"
              onClick={() => handleClick(char)}
            >
              {char}
            </button>
          ))}
          {["0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              className="p-6 bg-gray-600 text-white rounded-xl text-2xl hover:bg-gray-500 transition-all"
              onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            >
              {char}
            </button>
          ))}
          <button
            className="col-span-4 p-6 bg-red-600 text-white rounded-xl text-2xl hover:bg-red-500 transition-all"
            onClick={clearInput}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
