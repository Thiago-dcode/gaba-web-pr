import React from "react";

export default function Form({
  handleSubmit,
  children,
  title,
  className,
}: {
  handleSubmit: Function;
  children: React.ReactNode;
  title: string;
  className: string;
}) {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={`${className} bg-black/10 flex flex-col items-center w-fu gap-5 p-5  shadow-md  shadow-white/10 rounded-xl `}
      action=""
    >
      <h3 className="capitalize text-2xl font-bold">{title}</h3>
      <div className="flex flex-col gap-5">{children}</div>

      <button className="hover:bg-gray-500 hover:text-white bg-white w-32 rounded-md  text-black">
        Submit
      </button>
    </form>
  );
}
