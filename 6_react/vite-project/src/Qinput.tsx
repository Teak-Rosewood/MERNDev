import { useState } from "react";

function Qinput() {
    const [numValue, setNumValue] = useState("");
    const [sumNumber, setSumNumber] = useState(0);
    const [counter, setCounter] = useState(0);
    const calcSum = (num: string) => {
        let sum = 0;
        for (let i = 1; i <= Number(num); i++) {
            sum = sum + i;
        }
        setSumNumber(sum);
        // console.log(numValue);
    };
    return (
        <>
            <input
                type="text"
                placeholder="Enter number"
                onChange={(event) => {
                    setNumValue(event.target.value);
                    calcSum(event.target.value);
                    console.log(event.target.value);
                }}
            ></input>
            <h2>
                Sum from 1 to {numValue} is {sumNumber}
            </h2>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Click Me ({counter})
            </button>
        </>
    );
}

export default Qinput;
