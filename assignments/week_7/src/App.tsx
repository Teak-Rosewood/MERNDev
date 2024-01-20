import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const Question1 = lazy(() => import("./components/Question1"));
const Question2 = lazy(() => import("./components/Question2"));
const Question3 = lazy(() => import("./components/Question3"));
const Question4 = lazy(() => import("./components/Question4"));
const Question5 = lazy(() => import("./components/Question5"));
const Question6 = lazy(() => import("./components/Question6"));
const Question7 = lazy(() => import("./components/Question7"));

function App() {
    return (
        <>
            <BrowserRouter>
                <AppBar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/Question1" element={<Question1 />} />
                        <Route path="/Question2" element={<Question2 />} />
                        <Route path="/Question3" element={<Question3 />} />
                        <Route path="/Question4" element={<Question4 />} />
                        <Route path="/Question5" element={<Question5 />} />
                        <Route path="/Question6" element={<Question6 />} />
                        <Route path="/Question7" element={<Question7 />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}

const AppBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <button
                    onClick={() => navigate("/Question1")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Question 1
                </button>
                <button
                    onClick={() => navigate("/Question2")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Question 2
                </button>
                <button
                    onClick={() => navigate("/Question3")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Question 3
                </button>
                <button
                    onClick={() => navigate("/Question4")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Question 4
                </button>
                <button
                    onClick={() => navigate("/Question5")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Question 5
                </button>
                <button
                    onClick={() => navigate("/Question6")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Question 6
                </button>
                <button
                    onClick={() => navigate("/Question7")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Question 7
                </button>
            </div>
        </>
    );
};
export default App;
