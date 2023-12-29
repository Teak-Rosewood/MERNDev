import { useState } from "react";
import TaskInfo from "./TaskInfo";

interface TodoDataProp {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

type todoArray = TodoDataProp[];

const TaskList: React.FC<{ data: todoArray }> = ({ data }) => {
    const [todoData, setTodoData] = useState(false);
    const ButtonPressed = (id: number, status: boolean) => {
        const todo = data.find((todo) => todo.id === id);
        if (todo) todo.completed = status;
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
                />
            ))}
        </>
    );
};

export default TaskList;
