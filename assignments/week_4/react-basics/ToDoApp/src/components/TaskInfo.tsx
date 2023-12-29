interface TaskInfoProp {
    title: string;
    description: string;
    completed: boolean;
    id: number;
    ButtonPressed: (id: number, status: boolean) => void;
}
const TaskInfo = ({
    title,
    description,
    completed,
    id,
    ButtonPressed,
}: TaskInfoProp) => {
    let buttonStatus = completed ? "Completed" : "Mark as Done";
    return (
        <>
            <h4 key={id + "-title"}>{title}</h4>
            <div key={id + "-description"}>{description}</div>
            <button
                type="button"
                className="btn btn-secondary"
                key={id + "-button"}
                onClick={() => {
                    ButtonPressed(id, !completed);
                }}
            >
                {buttonStatus}
            </button>
            <br />
        </>
    );
};
export default TaskInfo;
