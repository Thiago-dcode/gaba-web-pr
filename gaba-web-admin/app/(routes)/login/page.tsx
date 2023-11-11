"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/app/components/form/Form";
import Input from "@/app/components/form/input/Input";
import { validateEmail, validatePassword } from "@/app/lib/utils/Validate";
import { signIn } from "next-auth/react";
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setErrors({
      email: "",
      password: "",
    });
    const emailError = validateEmail(email);
    if (emailError) {
      setErrors((prev) => {
        return { ...prev, email: emailError };
      });
    }
    const passwordError = validatePassword(password);
    if (passwordError) {
      setErrors((prev) => {
        return { ...prev, password: passwordError };
      });
    }
    if (emailError || passwordError) return;

    //handle login:

    const signInData = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!signInData?.error) {
      router.push("/");
    }
  };
  return (
    <Form handleSubmit={handleSubmit} className="mt-20" title="Login">
      <Input
        handleInput={setEmail}
        error={errors?.email}
        placeholder="Email"
        type="text"
      />
      <Input
        handleInput={setPassword}
        error={errors?.password}
        placeholder="Password"
        type="password"
      />
    </Form>
  );
}
