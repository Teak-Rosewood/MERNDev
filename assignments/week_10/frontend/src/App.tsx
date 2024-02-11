import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { jwt } from "./store/atoms";
import { useRecoilState } from "recoil";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
    const [token, setToken] = useRecoilState(jwt);

    return (
        <>
            <BrowserRouter>
                {token.set === true ? <button onClick={() => setToken({ value: "", set: false })}>Logout</button> : <div></div>}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
