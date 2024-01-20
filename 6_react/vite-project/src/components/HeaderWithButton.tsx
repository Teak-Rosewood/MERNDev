import { useState } from "react";
import Header from "./Header";
const HeaderWithButton: React.FC<{ initialTitle: string }> = ({ initialTitle }) => {
    const [value, setValue] = useState(initialTitle);
    return (
        <>
            <button onClick={() => setValue("My name is " + Math.random())}>Click Me to Change title</button>
            <Header title={value}></Header>
        </>
    );
};
export default HeaderWithButton;
