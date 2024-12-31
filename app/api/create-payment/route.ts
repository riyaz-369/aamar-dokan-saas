import { NextResponse } from "next/server";

type CheckoutDataType = {
  amount: number;
  aamardokanId: string;
};

// Mocked functions for authCheck and GetToken
const authCheck = async (aamardokanId: string) => {
  // Perform your authentication logic here
  console.log(`Authenticating aamardokanId: ${aamardokanId}`);
};

const GetToken = async (aamardokanId: string) => {
  // Mocked token retrieval logic
  return { idToken: "mocked-id-token" };
};

export async function POST(req: Request) {
  try {
    const data: CheckoutDataType = await req.json();

    // Validate input data
    if (!data.amount || data.amount < 1 || !data.aamardokanId) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    // Authentication check
    await authCheck(data.aamardokanId);

    // Retrieve token
    const { idToken } = await GetToken(data.aamardokanId);

    const body = {
      mode: "0011",
      payerReference: "01723888888",
      callbackURL: "yourdomain.com",
      merchantAssociationInfo: "MI05MID54RF09123456One",
      amount: data.amount.toString(),
      currency: "BDT",
      intent: "sale",
      merchantInvoiceNumber: "Inv0124",
    };

    // Call the external API
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

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { message: "API Error", error },
        { status: response.status }
      );
    }

    const responseData = await response.json();
    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error in CreatePayment", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
