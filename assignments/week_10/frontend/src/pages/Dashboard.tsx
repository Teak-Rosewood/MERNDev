import { useRecoilValue } from "recoil";
import { jwt } from "../store/atoms";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TodoInputBox from "../components/TodoInputBox";
import TodoList from "../components/TodoList";

const Dashboard = () => {
    const token = useRecoilValue(jwt);

    const navigate = useNavigate();

    useEffect(() => {
        if (token.set === false) navigate("/");
        else navigate("/dashboard");
    }, [token]);

    return (
        <>
            <div className="bg-gray-300 h-screen flex justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <div className="font-bold text-2xl pt-6">Dashboard</div>
                    <br />
                    <TodoInputBox />
                    <br></br>
                    <br></br>
                    <br></br>
                    <TodoList />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
