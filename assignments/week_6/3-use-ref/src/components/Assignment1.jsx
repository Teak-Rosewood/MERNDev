import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const elementFocus = useRef();

    useEffect(() => {
        elementFocus.current.focus();
    }, []);

    const handleButtonClick = () => {
        elementFocus.current.focus();
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={elementFocus}/>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
