import React from "react";

type input = {
  handleInput: Function;
  error?: string;
  placeholder?: string;
  type?: string;
};

export default function Input({
  handleInput,
  error,
  placeholder,
  type = "text",
}: input) {
  return (
    <div className="flex flex-col items-center w-full">
      <input
        onChange={(e) => {handleInput(e.target.value)}}
        placeholder={placeholder}
        className="bg-transparent outline-none border-b-2 "
        type={type}
      />
      <p className="h-3  text-xs self-start text-red-500">{error}</p>
    </div>
  );
}
