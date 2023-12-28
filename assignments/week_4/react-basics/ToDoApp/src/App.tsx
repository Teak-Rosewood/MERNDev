import { useState } from "react";
import InputBar from "./components/InputBar";
import TaskInfo from "./components/TaskInfo";
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

    function MarkComplete(id: number, status: boolean) {}

    return (
        <>
            <InputBar
                title="Task"
                description="Task Description"
                getData={getData}
            />
            <br></br>
            <br></br>
            <TaskInfo
                title="Task1"
                description="This is a description"
                completed={false}
            />
            <TaskList
                data={todoState}
                markComplete={(id: number, status: number) => {
                    console.log(id, status);
                }}
            />
        </>
    );
}

export default App;
