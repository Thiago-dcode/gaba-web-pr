import { NextResponse } from "next/server";
import { Sql } from "@prisma/client/runtime/library";
import prisma from "@/app/lib/prisma";
import { error } from "console";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  try {
    const sections = await prisma?.section.findFirst();
    return NextResponse.json(sections);
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

export async function POST(request: Request) {
  //TODO: implement create.
}

// const limit = searchParams.get("limit");
// const obj = Object.fromEntries(searchParams.entries());
