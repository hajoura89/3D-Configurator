import React from 'react'

export const Header = () => {
	return (
    	<header className="z-50 absolute top-0 text-black py-2 px-16 font-extrabold tracking-widest uppercase flex justify-between items-center w-full">
			<div className="flex items-center text-5xl">
				<img
					className="h-24 w-24"
					src="./src/assets/logo.svg"
					alt=""
				/>
			</div>
			<button 
				className="font-rubix p-2 bg-pink-800 text-white font-medium rounded-lg">
				Customize
			</button>
		</header>
  );
};