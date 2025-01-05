import store, { RootState } from "@/app/_redux-store/store";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  //   console.log(await req.json());
  const state: RootState = store.getState();
  const sliceData = state.orderSlice;

  const user = {
    name: "John",
  };
  return NextResponse.json(sliceData);
}
