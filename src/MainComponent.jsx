import { Routes, Route } from "react-router-dom";
import App from './App'
import Test from "./Test";
import SingleMoviePage from "./SingleMoviePage";
import { SignedIn, SignedOut } from '@clerk/clerk-react';

import LandingPage from "./LandingPage";

const MainComponent = () => {
    return (
        <div className="App">
            <SignedOut>
                <LandingPage />
            </SignedOut>
            <SignedIn>
                <Routes>
                    {/* <Route path='/login' element={<Landing />} /> */}
                    <Route path="/" element={<App />} />
                    <Route path='/test' element={<Test />} />
                    <Route path="/shows/:show_id" element={<SingleMoviePage />} />

                </Routes>
            </SignedIn>
        </div>
    );
};
export default MainComponent;