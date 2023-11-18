"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/app/components/form/Form";
import Error from "@/app/components/error/Error";
import Input from "@/app/components/form/input/Input";
import {
  validateEmail,
  validatePassword,
} from "@/app/lib/validation/validation";
import { signIn } from "next-auth/react";
export default function Login() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setErrors({});
    const emailError = validateEmail(email);
    if (emailError) {
      setErrors((prev) => {
        return {
          ...prev,
          email: emailError,
        };
      });
    }
    const passwordError = validatePassword(password);
    if (passwordError) {
      setErrors((prev) => {
        return {
          ...prev,
          password: passwordError,
        };
      });
    }
    if (emailError || passwordError) return;

    //handle login:

    try {
      setIsPending(true);
      const signInData = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!signInData?.error) {
        router.push("/");
        return;
      }
      switch (signInData.status) {
        case 401:
          setErrors((prev) => {
            return {
              ...prev,
              server: "Wrong credentials",
            };
          });
          break;

        default:
          break;
      }
    } catch (error) {
    } finally {
      setIsPending(false);
    }
  };
  return (
    <Form
      isPending={isPending}
      handleSubmit={handleSubmit}
      className="mt-20"
      title="Login"
      errors={errors}
    >
      <Input handleInput={setEmail} placeholder="Email" type="text" />
      <Input handleInput={setPassword} placeholder="Password" type="password" />
    </Form>
  );
}
