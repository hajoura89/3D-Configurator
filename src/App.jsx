import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Customization";
 
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/customization"
                        element={<About />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};
 
export default App;