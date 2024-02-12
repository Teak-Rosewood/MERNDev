import axios from "axios";
import { SetterOrUpdater } from "recoil";
import { todoProp } from "../store/atoms";

export const fetchTodo = (token: string, setTodos: SetterOrUpdater<todoProp[]>) => {
    axios
        .get("http://localhost:3000/api/v1/todos/", {
            headers: {
                authorization: "Bearer " + token,
            },
        })
        .then((res) => {
            setTodos(res.data);
        });
};

export const updateTodo = (id: number, status: boolean, token: string) => {
    axios.post(
        "http://localhost:3000/api/v1/todos/updateTodo",
        {
            id: id,
            status: status,
        },
        {
            headers: {
                authorization: "Bearer " + token,
            },
        }
    );
};

export const deleteTodo = (id: number, token: string) => {
    axios.post(
        "http://localhost:3000/api/v1/todos/deleteTodo",
        {
            id: id,
        },
        {
            headers: {
                authorization: "Bearer " + token,
            },
        }
    );
};
