import React from "react";

export default function Error({ error }: { error?: string }) {
  return (
    <p className=" w-full text-xs self-start text-red-500">
      {error}
    </p>
  );
}
