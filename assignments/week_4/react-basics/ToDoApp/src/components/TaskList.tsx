import { useState } from "react";
import TaskInfo from "./TaskInfo";

interface TodoDataProp {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}
interface TodoListProp {
    data: TodoDataProp[];
    markComplete: (val: TodoDataProp[]) => void;
}

const TaskList = ({ data, markComplete }: TodoListProp) => {
    const [todoData, setTodoData] = useState(false);
    const ButtonPressed = (id: number, status: boolean) => {
        const todo = data.find((todo) => todo.id === id);
        if (todo) todo.completed = status;
        markComplete(data);
        setTodoData((prev) => !prev);
        todoData;
    };
    return (
        <>
            {data.map((item) => (
                <TaskInfo
                    title={item.title}
                    description={item.description}
                    completed={item.completed}
                    id={item.id}
                    key={item.id}
                    ButtonPressed={ButtonPressed}
                ></TaskInfo>
            ))}
        </>
    );
};

export default TaskList;
