import { atom } from "recoil";

export const jwt = atom({
    key: "jwt",
    default: { value: "", set: false } as { value: string; set: boolean },
});
