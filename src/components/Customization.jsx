import React from "react";
import { useNavigate } from "react-router-dom";
 
const Customization = () => {
    const navigate = useNavigate();
 
    return (
        <>
            <h1 className="text-red-800">
                Customization Page
            </h1>
            <button className="font-rubix p-2 bg-pink-800 text-white font-medium rounded-lg" onClick={() => navigate(-1)}>
                Go Back Home
            </button>
        </>
    );
};
 
export default Customization;