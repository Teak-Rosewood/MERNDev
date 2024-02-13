import { atom, atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export interface todoProp {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export const todo = atomFamily({
    key: "todo",
    default: selectorFamily({
        key: "fetchdata",
        get: (token: string) => async () => {
            try {
                const data = await axios.get("http://localhost:3000/api/v1/todos/", {
                    headers: {
                        authorization: "Bearer " + token,
                    },
                });
                return data.data;
            } catch (error) {
                return [] as todoProp[];
            }
        },
    }),
});

export const jwt = atom({
    key: "jwt",
    default: { value: "", set: false } as { value: string; set: boolean },
});
