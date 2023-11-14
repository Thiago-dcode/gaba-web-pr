"use client";
import React, { FormEvent } from "react";
import Form from "../form/Form";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LogOut() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        signOut({
          redirect: false,
        }).then((val) => {
          console.log(val);
          router.push("/login");
        });
      }}
      className="hover:bg-gray-500 hover:text-white bg-white w-20 rounded-md  text-black"
    >
      Log-out
    </button>
  );
}
