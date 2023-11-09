import React from "react";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-screen items-center justify-center h-screen -mt-20">
      {children}
    </main>
  );
}
