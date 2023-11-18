"use client";
import React, { FormEvent, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "../loading/Loading";
export default function LogOut() {
  const [isPending, setIsPending] = useState(false);
  const logOut = () => {
    setIsPending(true);
    signOut({
      redirect: false,
    })
      .then((val) => {
        console.log(val);
        router.push("/login");
      })
      .catch((error) => {
        console.log("LogOut err:", error);
      })
      .finally(() => {
        setIsPending(false);
      });
  };
  const router = useRouter();

  return (
    <div className="relative flex flex-col  h-full w-44 items-end">
      {!isPending ? <button
        onClick={() => {
          logOut()
        }}
      >
        <span >Log-out</span>
      </button> : <Loading size={1} />}


    </div>
  );
}
