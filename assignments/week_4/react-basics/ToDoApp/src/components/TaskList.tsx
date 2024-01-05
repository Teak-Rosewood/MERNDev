import TaskInfo from "./TaskInfo";

interface TodoDataProp {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface todoArray {
    data: TodoDataProp[];
    setTodoState: (data: TodoDataProp[]) => void;
}

const TaskList: React.FC<todoArray> = ({ data, setTodoState }) => {
    const ButtonPressed = (id: number, status: boolean) => {
        const todoIndex = data.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
            const newData = [...data];
            newData[todoIndex].completed = status;
            setTodoState(newData);
        }
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
