import { atom, useAtom } from "jotai";
import { NotificationType, notification } from "./data";

type Config = {
  selected: NotificationType["id"] | null;
};

const configAtom = atom<Config>({
  selected: notification[0].id,
});

export function useNotification() {
  return useAtom(configAtom);
}
