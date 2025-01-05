import store, { RootState } from "@/app/_redux-store/store";
import { NextResponse } from "next/server";

export async function GET() {
  //   console.log(await req.json());
  const state: RootState = store.getState();
  const sliceData = state.orderSlice;

  return NextResponse.json(sliceData);
}
