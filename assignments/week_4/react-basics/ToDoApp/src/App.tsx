import { useState } from "react";
import InputBar from "./components/InputBar";
import TaskList from "./components/TaskList";

interface TodoDataProp {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

let globalId = 1;

function App() {
    const [todoState, setTodoState] = useState<TodoDataProp[]>([]);

    const getData = (title: string, description: string) => {
        let newtodo: TodoDataProp = {
            id: globalId++,
            title: title,
            description: description,
            completed: false,
        };
        setTodoState((prev) => [...prev, newtodo]);
    };

    return (
        <>
            <InputBar title="Task" description="Task Description" getData={getData} />
            <br></br>
            <br></br>
            <TaskList data={todoState} setTodoState={setTodoState} />
        </>
    );
}

export default App;
