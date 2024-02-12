import { useRecoilValue } from "recoil";
import { jwt } from "../store/atoms";

interface TodoInfoProp {
    title: string;
    description: string;
    completed: boolean;
    id: number;
    updateTodo: (id: number, status: boolean, token: string) => void;
    deleteTodo: (id: number, token: string) => void;
}

const TodoInfo = ({ title, description, completed, id, updateTodo, deleteTodo }: TodoInfoProp) => {
    let buttonStatus = completed ? "Completed" : "Done";

    const token = useRecoilValue(jwt);
    return (
        <>
            <h4 key={id + "-title"} className="font-medium">
                {title}
            </h4>
            <div key={id + "-description"} className="font-normal">
                {description}
            </div>
            <div className="flex">
                <button
                    type="button"
                    className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-small rounded-lg text-sm px-5 py-0.5 me-2 mb-2"
                    key={id + "update-button"}
                    onClick={() => {
                        updateTodo(id, !completed, token.value);
                    }}
                >
                    {buttonStatus}
                </button>
                <button
                    type="button"
                    className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-small rounded-lg text-sm px-5 py-0.5 me-2 mb-2"
                    key={id + "delete-button"}
                    onClick={() => {
                        deleteTodo(id, token.value);
                    }}
                >
                    Delete
                </button>
            </div>
        </>
    );
};
export default TodoInfo;
