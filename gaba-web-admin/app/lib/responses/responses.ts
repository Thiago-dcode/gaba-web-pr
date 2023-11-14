import { NextResponse } from "next/server";

export const success = (data: any, message = 'Success', status= 200) => {
  return NextResponse.json(
    {
      data,
      message,
    },
    { status }
  );
};

export const error = (
  data = [],
  message = "Something went wrong",
  status = 400
) => {
  return NextResponse.json(
    {
      data,
      message,
    },
    { status }
  );
};
