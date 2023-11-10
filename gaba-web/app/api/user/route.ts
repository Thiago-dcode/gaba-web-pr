import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
   const body = request.json();
  
    return NextResponse.json(body);
  } catch (error) {
    
  }
}
