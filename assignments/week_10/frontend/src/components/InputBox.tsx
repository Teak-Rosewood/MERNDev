import { useState } from "react";

interface InputBox {
    name: string;
    placeholder: string;
    getData: (data: string) => void;
}
const InputBox = ({ name, placeholder, getData }: InputBox) => {
    const [inputData, setInputData] = useState("");
};
