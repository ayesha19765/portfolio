"use client";

import React from "react";

import { techStack, frameWorks, languagesAndTools } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const TechStack = () => {
	return (
		<section id="skills" className="md:pt-[15vh] md:pb-[5vh]">
			<h1 className="heading">
				My
				<span className="text-purple"> tech Stack</span>
			</h1>

			<div className="flex flex-col items-center md:mt-[5vh]">
				<div
					className="
					h-[30vh] 
					md:min-h-[45vh] 
					md:h-[25rem] 
					rounded-md 
					flex 
					flex-col 
					antialiased 
					items-center 
					justify-center 
					relative 
					overflow-hidden 
					gap-1 
					md:gap-4
					"
				>
					<InfiniteMovingCards
						items={techStack}
						direction="left"
						speed="slow"
						className="h-[8vh] md:h-[10vh]"
					/>

					<InfiniteMovingCards
						items={frameWorks}
						direction="right"
						speed="slow"
						className="h-[8vh] md:h-[10vh]"
					/>

					<InfiniteMovingCards
						items={languagesAndTools}
						direction="left"
						speed="slow"
						className="h-[8vh] md:h-[10vh]"
					/>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
