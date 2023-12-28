interface TodoDataProp {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}
interface TodoListProp {
    data: TodoDataProp[];
    markComplete: (id: number, status: number) => void;
}

const TaskList = ({ data, markComplete }: TodoListProp) => {
    console.log(data);
    //markComplete(1, true);
    return (
        <>
            <p>Hello There</p>
        </>
    );
};

export default TaskList;
