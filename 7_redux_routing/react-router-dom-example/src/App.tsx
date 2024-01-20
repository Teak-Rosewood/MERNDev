import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));
function App() {
    return (
        <>
            <BrowserRouter>
                <AppBar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/" element={<Landing />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

function AppBar() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <button onClick={() => navigate("/")}>Landing Page</button>
                <button onClick={() => navigate("/dashboard")}>Dashboard Page</button>
            </div>
        </>
    );
}
export default App;
