import React from "react";
import Error from "../error/Error";
import { capitalize } from "@/app/lib/utils/utils";
import Loading from "../loading/Loading";
export default function Form({
  handleSubmit,
  isPending = false,
  children,
  title,
  className,
  btnText = "submit",
  errors,
}: {
  errors?: Record<string, string>;
  isPending?: boolean;
  handleSubmit: Function;
  children?: React.ReactNode;
  title?: string;
  className?: string;
  btnText?: string;
}) {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={`${className} bg-black/10 flex flex-col items-center w-80  gap-5 p-5  shadow-md  shadow-white/10 rounded-xl `}
      action=""
    >
      <h3 className="capitalize text-2xl font-bold">{title}</h3>
      <div className="flex flex-col gap-5">{children}</div>

      {!isPending ? <button className="hover:bg-gray-500 hover:text-white bg-white w-32 rounded-md  text-black">
        <span> {btnText}</span>
      </button> : <Loading />}

      {errors && (
        <ul className="flex flex-col items-start gap-3 h-full">
          {Object.entries(errors).map(([key, err]) => {
            return (
              <li className="h-full">
                <Error error={`${capitalize(key)}: ${err}`} />
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
}
