import { Routes, Route } from "react-router-dom";
import App from './App'
import Test from "./Test";

const MainComponent = () => {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/test' element={<Test />} />

            </Routes>
        </div>
    );
};
export default MainComponent;