import React from 'react'
import { useNavigate } from 'react-router-dom';

const CustomizeNow = () => {
	const navigate = useNavigate();
  	return (
    	<section className="third-section h-screen relative ">
			<div className="z-20 absolute top-[30%] left-24 flex flex-col justify-center border border-black-800 text-black-800 p-5 rounded-lg">
				<h1 className="text-5xl text-pink-800 font-mynerver font-bold">
				With smooth navigation
				</h1>
				<p className="w-[500px] pt-2 text-black-500 text-justify text-sm">
					Indulge in the art of customization as you personalize your dream ring.
					Select from a spectrum of colors and dazzling diamonds to craft a truly
					unique symbol of your love. With every choice at your fingertips, create
					a ring that captures the essence of your special bond, tailored just for you.
				</p>
			
				<button 
					onClick={() =>navigate("/customization") }

					className="bg-pink-500  border border-black-800 p-2 mt-2 rounded-lg text-white 
								hover:bg-pink-500 hover:text-white transition duration-500">
					CUSTOMIZE
				</button>
			</div>
		</section>
  );
};

export default CustomizeNow