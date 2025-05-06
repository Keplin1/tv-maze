import { Routes, Route } from "react-router-dom";
import App from './App'
import Test from "./Test";
import SingleMoviePage from "./SingleMoviePage";

const MainComponent = () => {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/test' element={<Test />} />
                <Route path="/shows/:show_id" element={<SingleMoviePage />} />

            </Routes>
        </div>
    );
};
export default MainComponent;