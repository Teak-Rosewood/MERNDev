import axios from "axios";
import { useCallback, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { jwt, todo, todoProp } from "../store/atoms";

const TodoInputBox = () => {
    const [taskTitleState, setTaskTitleState] = useState("");
    const [taskDescriptionState, setTaskDescriptionState] = useState("");
    const token = useRecoilValue(jwt);
    const setTodoarr = useSetRecoilState(todo(token.value));

    const createTodo = useCallback((title: string, description: string, token: string) => {
        axios
            .post(
                "http://localhost:3000/api/v1/todos/createTodo",
                {
                    title: title,
                    description: description,
                },
                {
                    headers: {
                        authorization: "Bearer " + token,
                    },
                }
            )
            .then((res) => {
                const obj = {
                    id: res.data.id,
                    title: title,
                    description: description,
                    completed: false,
                };
                setTodoarr((todoarr: todoProp[]) => [...todoarr, obj]);
            });
    }, []);

    return (
        <>
            <div className="font-bold">Title</div>
            <input type="text" placeholder="Title" id="task" onChange={(event) => setTaskTitleState(event.target.value)}></input>
            <br></br>
            <br></br>
            <div className="font-bold">Description</div>
            <input
                type="text"
                placeholder="Task Description"
                id="description"
                onChange={(event) => setTaskDescriptionState(event.target.value)}
            ></input>
            <br></br>
            <br></br>
            <button
                type="button"
                className="btn btn-primary bg-slate-500 rounded p-1"
                onClick={() => createTodo(taskTitleState, taskDescriptionState, token.value)}
            >
                Add Task
            </button>
        </>
    );
};

export default TodoInputBox;
