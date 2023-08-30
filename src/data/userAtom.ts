import { atom } from "recoil";

// session
export const sessionAtom = atom({
  key: "user-session",
  default: {},
});

// user
export const userAtom = atom({
  key: "user",
  default: {},
});
