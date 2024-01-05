import { useState } from "react";

interface InputBarProp {
    title: string;
    description: string;
    getData: (title: string, description: string) => void;
}

const InputBar = ({ title, description, getData }: InputBarProp) => {
    const [taskTitleState, setTaskTitleState] = useState("");
    const [taskDescriptionState, setTaskDescriptionState] = useState("");
    return (
        <>
            <input type="text" placeholder={title} id="task" onChange={(event) => setTaskTitleState(event.target.value)}></input>
            <br></br>
            <br></br>
            <input type="text" placeholder={description} id="description" onChange={(event) => setTaskDescriptionState(event.target.value)}></input>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-primary" onClick={() => getData(taskTitleState, taskDescriptionState)}>
                Add Task
            </button>
        </>
    );
};

export default InputBar;
