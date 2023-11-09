import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id; // 'a', 'b', or 'c'

  return NextResponse.json({ id: id });
}
