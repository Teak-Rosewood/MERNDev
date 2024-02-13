import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { jwt } from "../store/atoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [token, setToken] = useRecoilState(jwt);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (token.set === false) navigate("/");
        else navigate("/dashboard");
    }, [token]);

    const createUser = useCallback((username: string, password: string) => {
        axios
            .post("https://backendtodo.saatwik.in/api/v1/user/signup", {
                username: username,
                password: password,
            })
            .then((res) => {
                setMessage(res.data.message);
                setToken({ value: res.data.token, set: true });
            })
            .catch((err) => {
                setMessage(err.response.data.message);
            });
    }, []);

    const loginUser = useCallback((username: string, password: string) => {
        axios
            .post("https://backendtodo.saatwik.in/api/v1/user/login", {
                username: username,
                password: password,
            })
            .then((res) => {
                setToken({ value: res.data.token, set: true });
                setMessage("Logged In!");
            })
            .catch((err) => {
                setMessage(err.response.data.message);
            });
    }, []);

    return (
        <>
            <div className="bg-gray-300 h-screen flex justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <div className="font-bold text-2xl pt-6">Login / Signup</div>
                    <div className="text-sm font-medium text-left py-2">Username</div>
                    <input
                        className="w-full px-2 py-1 border rounded border-slate-200"
                        type="text"
                        placeholder="Email"
                        id="username"
                        onChange={(event) => setUsername(event.target.value)}
                    ></input>
                    <br /> <br />
                    <div className="text-sm font-medium text-left py-2">Password</div>
                    <input
                        className="w-full px-2 py-1 border rounded border-slate-200"
                        type="text"
                        placeholder="password"
                        id="password"
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                    <br />
                    <br />
                    <div className="text-red-500">{message}</div>
                    <div className="flex">
                        <button
                            type="button"
                            onClick={() => createUser(username, password)}
                            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Sign Up
                        </button>
                        <br />
                        <br />
                        <button
                            type="button"
                            onClick={() => loginUser(username, password)}
                            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
