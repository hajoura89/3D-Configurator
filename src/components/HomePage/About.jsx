import React from 'react'

const About = () => {
  return (
    <section className="second-section h-screen relative"
		>
			{/* glowing background */}
			<div className="h-[500px]  w-full bg-pink-200 animate-pulse rotate-[10deg] skew-x-12"></div>
			{/* text */}
			<div className="absolute top-[15%] sm:right-20 md:right-[300px] text-black">
				<h1 className="text-5xl font-bold font-rubix">In stunning 3D</h1>
				<p className="w-[500px] font-semibold pt-10">
				Immerse yourself in the world of design with our mesmerizing 3D detail.
				Experience the beauty and craftsmanship of each ring as if it were right
				in front of you.
				</p>
			</div>
		</section>
  );
};

export default About