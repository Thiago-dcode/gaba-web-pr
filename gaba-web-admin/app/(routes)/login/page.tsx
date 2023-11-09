"use client";

import React, { useState } from "react";
import Form from "@/app/components/form/Form";
import Input from "@/app/components/form/input/Input";
import { validateEmail, validatePassword } from "@/app/lib/utils/Validate";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: Event) => {
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
