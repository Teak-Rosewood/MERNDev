interface TaskInfoProp {
    title: string;
    description: string;
    completed: boolean;
}
const TaskInfo = ({ title, description, completed }: TaskInfoProp) => {
    const GetButtonStatus = (status: boolean) => {
        return status ? "Completed" : "Mark as Done";
    };
    return (
        <>
            <h3>{title}</h3>
            <div>{description}</div>
            <button type="button" className="btn btn-secondary">
                {GetButtonStatus(completed)}
            </button>
        </>
    );
};
export default TaskInfo;
