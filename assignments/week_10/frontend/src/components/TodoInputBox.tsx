import axios from "axios";
import { useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { jwt, todo } from "../store/atoms";

const TodoInputBox = () => {
    const [taskTitleState, setTaskTitleState] = useState("");
    const [taskDescriptionState, setTaskDescriptionState] = useState("");
    const token = useRecoilValue(jwt);
    const [todoarr, setTodoarr] = useRecoilState(todo(token.value));

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
                const id = res.data.id;
                const obj = {
                    id: id,
                    title: title,
                    description: description,
                    completed: false,
                };
                let tempTodo = [...todoarr];
                tempTodo.push(obj);
                setTodoarr(tempTodo);
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
