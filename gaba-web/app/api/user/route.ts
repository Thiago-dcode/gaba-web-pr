import { NextResponse } from "next/server";
import { User } from "@/app/lib/definitions";
import { hash } from "bcrypt";
import prisma from "@/app/lib/prisma";
import { error, success } from "@/app/lib/responses/responses";
import {
  validateEmail,
  validateLenght,
  validatePassword,
} from "@/app/lib/validation/validation";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, username, password } = body;

    if (!(email && username && password))
      return error([], "All fields are required");

    if (validateEmail(email)) return error([], validateEmail(email));
    if (validateLenght(username)) return error([], validateLenght(username));
    if (validatePassword(password))
      return error([], validatePassword(password));

    const emailExist: User | any = await prisma?.user.findUnique({
      where: { email },
    });
    const usernameExist: User | any = await prisma?.user.findUnique({
      where: { username: username.toLowerCase() },
    });

    if (emailExist) return error([], "This email already exists");
    if (usernameExist) return error([], "This username already exists");

    //success
    const hashedPass = await hash(password, 10);

    const newUser = await prisma?.user.create({
      data: {
        email,
        username: username.toLowerCase(),
        password: hashedPass,
      },
    });
    return success(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
