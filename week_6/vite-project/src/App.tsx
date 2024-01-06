import Header from "./components/Header";
import HeaderWithButton from "./components/HeaderWithButton";
function App() {
    return (
        <>
            <HeaderWithButton initialTitle="This is title 1" />
            <Header title="This is title2"></Header>
        </>
    );
}

export default App;
