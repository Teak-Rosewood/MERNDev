import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { jwt } from "../store/atoms";

interface Todos {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}
const TodoList = () => {
    const token = useRecoilValue(jwt);
    const [todos, setTodos] = useState<Todos[]>([]);

    useEffect(() => {
        console.log(token.value);
        if (token.set === true) fetchTodo(token);
    }, [token]);

    const fetchTodo = async (token: { value: string; set: boolean }) => {
        axios
            .get("http://localhost:3000/api/v1/todos/", {
                headers: {
                    authorization: "Bearer " + token.value,
                },
            })
            .then((res) => {
                setTodos(res.data);
                console.log("here");
                console.log(todos);
                console.log(res.data);
            });
    };

    const updateTodo = useCallback(
        (id: number, status: boolean) => {
            axios.post(
                "http://localhost:3000/api/v1/todos/updateTodo",
                {
                    id: id,
                    status: status,
                },
                {
                    headers: {
                        authorization: "Bearer " + token.value,
                    },
                }
            );
        },
        [token]
    );

    const deleteTodo = useCallback(
        (id: number) => {
            axios.post(
                "http://localhost:3000/api/v1/todos/deleteTodo",
                {
                    id: id,
                },
                {
                    headers: {
                        authorization: "Bearer " + token.value,
                    },
                }
            );
        },
        [token]
    );

    return <div>List of Todos</div>;
};
export default TodoList;
