/* eslint-disable @typescript-eslint/no-explicit-any */
import globals from "node-global-storage";

export const globalDataSet = (tokenResult: any) => {
  console.log(
    "tokenResult from globalDataSet",
    tokenResult,
    globals.getValue("id_token")
  );
  globals.setValue("created_at", new Date(), { protected: true });
  globals.id_token = tokenResult.id_token;
  globals.setValue("grant_token", tokenResult.grant_token);
  globals.setValue("refresh_token", tokenResult.refresh_token);
};
