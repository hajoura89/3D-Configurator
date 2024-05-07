import React, { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Customization from "./components/Customization";
 
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
                        element={<Customization />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};
 
export default App;