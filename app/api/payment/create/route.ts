/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  authCheck,
  GetToken,
} from "@/app/(dashboard)/client/(order)/payment/payment-actions/_action";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Payment data", data); //{ amount: '1000', aamardokanId: '167310', orderId: 'AD340124' }
    const { aamardokanId, amount, orderId } = data;

    await authCheck(aamardokanId);

    if (!amount || amount < 1 || !aamardokanId || !orderId) {
      console.log("Invalid data");
      return NextResponse.json({ message: "Invalid data" });
    }

    //@ts-ignore
    const { idToken } = await GetToken(aamardokanId);
    //SET ORDER ID TO REFERANCE
    const body = {
      mode: "0011",
      payerReference: aamardokanId,
      callbackURL: `${process.env.BASE_URL}/api/payment/callback`,
      // merchantAssociationInfo: "MI05MID54RF09123456One",
      amount: amount,
      currency: "BDT",
      intent: "sale",
      merchantInvoiceNumber: orderId,
    };
    // "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create",
    const response = await fetch(
      process.env.BKASH_CREATE_PAYMENT_API as string,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: idToken,
          // "x-app-key": "4f6o0cjiki2rfm34kfdadl1eqq",
          "x-app-key": process.env.BKASH_APP_KEY as string,
        },
        body: JSON.stringify(body),
      }
    );

    const responseData = await response.json();

    // console.log("responseData from create payment", responseData);

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("error to create payment", error);
  }
}
