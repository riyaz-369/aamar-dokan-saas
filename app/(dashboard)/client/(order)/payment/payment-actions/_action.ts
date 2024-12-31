/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/prisma";
import { v4 as uuidv4 } from "uuid";

type SetTokenDataType = {
  aamardokanId: string;
  idToken?: string;
  refreshToken?: string;
  expiresIn?: number | null;
};

const SetToken = async (data: SetTokenDataType) => {
  const token = await prisma.paymentTokens.upsert({
    where: { aamardokanId: data.aamardokanId },
    update: {
      aamardokanId: data.aamardokanId,
      idToken: data.idToken,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn,
    },
    create: {
      aamardokanId: data.aamardokanId,
      method: "bkash",
      idToken: data.idToken,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn,
    },
  });
  return token;
};

const GetToken = async (aamardokanId: string) => {
  const token = await prisma.paymentTokens.findUnique({
    where: { aamardokanId },
  });
  return token;
};

const authCheck = async (aamardokanId: string) => {
  const token = await GetToken(aamardokanId);
  console.log("token from auth check", token);
  const currentDateTime = new Date();

  if (!token || !token.idToken) {
    await CreateGrantToken(aamardokanId);
  } else {
    const tokenAge =
      currentDateTime.getTime() - new Date(token.createdAt).getTime();
    // @ts-ignore
    if (tokenAge > token?.expiresIn * 1000) {
      await RefreshToken(aamardokanId); // TODO:: I am confused: (refresh token or grant token)
    } else {
      console.log("Token is still valid");
    }
  }
};

const CreateGrantToken = async (aamardokanId: string) => {
  try {
    const response = await fetch(
      "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          username: "sandboxTokenizedUser02",
          password: "sandboxTokenizedUser02@12345",
        },
        body: JSON.stringify({
          app_key: "4f6o0cjiki2rfm34kfdadl1eqq",
          app_secret: "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b",
        }),
      }
    );
    const data = await response.json();
    console.log("data from create grant token", data);

    await SetToken({
      aamardokanId: aamardokanId,
      idToken: data.id_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    })
      .then((res) => {
        // TODO:: remove this when testing is done
        console.log("Token saved", res);
      })
      .catch((err) => {
        console.error("Error in saving token", err);
      });
    return data;
  } catch (error) {
    console.error("Error in CreateGrantToken", error);
  }
};

const RefreshToken = async (aamardokanId: string) => {
  try {
    const token = await GetToken(aamardokanId);
    console.log("token from refresh token", token);
    const response = await fetch(
      "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/refresh",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          username: "sandboxTokenizedUser02",
          password: "sandboxTokenizedUser02@12345",
        },
        body: JSON.stringify({
          app_key: "4f6o0cjiki2rfm34kfdadl1eqq",
          app_secret: "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b",
          refresh_token: token?.refreshToken,
        }),
      }
    );
    const data = await response.json();
    console.log("data from refresh token", data);

    await SetToken({
      aamardokanId: aamardokanId,
      idToken: data.id_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    });

    return data;
  } catch (error) {
    console.error("Error in RefreshToken", error);
  }
};

type CheckoutDataType = {
  amount: number;
  aamardokanId: string;
};

const CreatePayment = async (data: CheckoutDataType) => {
  console.log(
    "data from create payment",
    data.amount.toString(),
    data.aamardokanId
  );
  try {
    await authCheck(data.aamardokanId);
    if (!data.amount || data.amount < 1 || !data.aamardokanId) {
      console.log("Invalid data");
      return "Invalid data";
    }

    // @ts-ignore
    const { idToken } = await GetToken(data.aamardokanId);
    console.log("idToken from create payment", idToken);
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
        body: JSON.stringify({
          mode: "0011",
          payerReference: " ",
          callbackUrl: "http://localhost:3000/api/bkash/callback",
          amount: data.amount.toString(),
          currency: "BDT",
          intent: "sale",
          merchantInvoiceNumber: "Inv" + uuidv4().substring(0, 5),
        }),
      }
    );
    const responseData = await response.json();
    console.log("responseData from create payment", responseData);
    return responseData;
  } catch (error) {
    console.error("Error in CreatePayment", error);
  }
};

// const ExecutePayment = async (
//   data: { paymentID: string },
//   aamardokanId: string
// ) => {
//   try {
//     if (!data.paymentID) {
//       return "Invalid payment ID";
//     }

//     // @ts-ignore
//     const { idToken } = await GetToken(aamardokanId);

//     const response = await fetch(
//       "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/payment/execute",
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           Accept: "application/json",
//           authorization: idToken,
//           "x-app-key": "4f6o0cjiki2rfm34kfdadl1eqq",
//         },
//         body: JSON.stringify({
//           paymentID: data.paymentID,
//         }),
//       }
//     );
//     const responseData = await response.json();
//     console.log(responseData);
//     return responseData;
//   } catch (error) {
//     console.error("Error in ExecutePayment", error);
//   }
// };

export const Checkout = async (data: CheckoutDataType) => {
  console.log("data from checkout", data);
  try {
    const createResult = await CreatePayment(data);
    console.log("createResult", createResult);
    return createResult;
  } catch (error) {
    console.error("Error in Checkout", error);
  }
};

// const BKashCallback = async (data: { paymentID: string }) => {
//   try {
//     console.log("callback started !!");
//     const response = await ExecutePayment(data);
//     console.log("callback response", response);
//     if (response.statusCode && response.statusCode === "0000") {
//       console.log("Payment executed successfully");
//     } else {
//       console.log("Payment failed");
//     }
//   } catch (error) {
//     console.error("Error in BKashCallback", error);
//   }
// };
