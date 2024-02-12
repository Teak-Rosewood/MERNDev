import { useRecoilState, useRecoilValue } from "recoil";
import { jwt, todo, todoProp } from "../store/atoms";
import TodoInfo from "./TodoInfo";
import axios from "axios";

const TodoList = () => {
    const token = useRecoilValue(jwt);
    const [todoarr, setTodoarr] = useRecoilState(todo(token.value));

    const updateTodo = (id: number, status: boolean, token: string) => {
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

        let tempTodo: todoProp[] = [];
        for (let i = 0; i < todoarr.length; i++) {
            if (todoarr[i].id === id) {
                tempTodo.push({
                    id: todoarr[i].id,
                    title: todoarr[i].title,
                    description: todoarr[i].description,
                    completed: status,
                });
            } else tempTodo.push(todoarr[i]);
        }
        setTodoarr(tempTodo);
    };

    const deleteTodo = (id: number, token: string) => {
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

        let tempTodo = [...todoarr];
        tempTodo = tempTodo.filter((data) => data.id !== id);
        setTodoarr(tempTodo);
    };

    return (
        <>
            {todoarr.map((item: todoProp) => (
                <TodoInfo
                    title={item.title}
                    description={item.description}
                    completed={item.completed}
                    id={item.id}
                    key={item.id}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </>
    );
};
export default TodoList;
