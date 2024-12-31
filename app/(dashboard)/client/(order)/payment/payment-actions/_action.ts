/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/prisma";

type SetTokenDataType = {
  aamardokanId: string;
  idToken?: string;
  refreshToken?: string;
  expiresIn?: number | null;
};

export const SetToken = async (data: SetTokenDataType) => {
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

export const GetToken = async (aamardokanId: string) => {
  const token = await prisma.paymentTokens.findUnique({
    where: { aamardokanId },
  });
  return token;
};

export const authCheck = async (aamardokanId: string) => {
  const token = await GetToken(aamardokanId);
  const currentDateTime = new Date();

  if (!token || !token.idToken) {
    await CreateGrantToken(aamardokanId);
  } else {
    const tokenAge =
      currentDateTime.getTime() - new Date(token.createdAt).getTime();
    // @ts-ignore
    if (tokenAge > token?.expiresIn * 1000) {
      await RefreshToken(aamardokanId);
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
          "content-type": "application/json",
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

    await SetToken({
      aamardokanId: aamardokanId,
      idToken: data.id_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    });
    // .then((res) => {
    //   // TODO:: remove this when testing is done
    //   console.log("Token saved", res);
    // })
    // .catch((err) => {
    //   console.error("Error in saving token", err);
    // });
    return data;
  } catch (error) {
    console.error("Error in CreateGrantToken", error);
  }
};

const RefreshToken = async (aamardokanId: string) => {
  try {
    const token = await GetToken(aamardokanId);
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
