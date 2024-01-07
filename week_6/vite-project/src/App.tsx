import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
function App() {
    const [id, setId] = useState(1);
    return (
        <>
            <Header title="Todo List"></Header>
            <button
                onClick={() => {
                    setId(1);
                }}
            >
                1
            </button>
            <button
                onClick={() => {
                    setId(2);
                }}
            >
                2
            </button>
            <button
                onClick={() => {
                    setId(3);
                }}
            >
                3
            </button>
            <button
                onClick={() => {
                    setId(4);
                }}
            >
                4
            </button>
            <button
                onClick={() => {
                    setId(5);
                }}
            >
                5
            </button>
            <Todo id={id}></Todo>
        </>
    );
}

const Todo: React.FC<{ id: number }> = ({ id }) => {
    let template = "https://sum-server.100xdevs.com/todo?id=" + id;
    const [todo, setTodo] = useState({ title: "", description: "" });
    useEffect(() => {
        axios.get(template).then((res) => {
            setTodo(res.data.todo);
        });
    }, [id]);
    return (
        <>
            <div key="id">
                <h2>{todo.title}</h2>
                <h4>{todo.description}</h4>
            </div>
        </>
    );
};
export default App;
