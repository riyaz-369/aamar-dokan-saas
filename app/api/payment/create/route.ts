/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  authCheck,
  GetToken,
} from "@/app/(dashboard)/client/(order)/payment/payment-actions/_action";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await authCheck(data.aamardokanId);

    if (!data.amount || data.amount < 1 || !data.aamardokanId) {
      console.log("Invalid data");
      return NextResponse.json({ message: "Invalid data" });
    }

    //@ts-ignore
    const { idToken } = await GetToken(data.aamardokanId);

    const body = {
      mode: "0011",
      payerReference: " ",
      callbackURL: "http://localhost:3000/api/payment/callback",
      merchantAssociationInfo: "MI05MID54RF09123456One",
      amount: data.amount,
      currency: "BDT",
      intent: "sale",
      merchantInvoiceNumber: "Inv0124",
    };
    const response = await fetch(
      "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: idToken,
          "x-app-key": "4f6o0cjiki2rfm34kfdadl1eqq",
        },
        body: JSON.stringify(body),
      }
    );

    const responseData = await response.json();

    console.log("responseData from create payment", responseData);

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("error to create payment", error);
  }
}
