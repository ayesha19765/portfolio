"use client";

import React from "react";

import { techStack, frameWorks } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { languagesAndTools } from "@/data/index";

const Clients = () => {
	return (
		<section id="skills" className="py-[7.5rem] md:pt-40">
			<h1 className="heading">
				My
				<span className="text-purple"> tech Stack</span>
			</h1>

			<div className="flex flex-col items-center max-lg:mt-10">
				<div
					// remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
					className="h-[35vh] md:min-h-[55vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden  "
				>
					<InfiniteMovingCards
						items={techStack}
						direction="left"
						speed="slow"
						className="h-[10vh] md:h-[15vh] "
					/>
					<InfiniteMovingCards
						items={frameWorks}
						direction="right"
						speed="slow"
						className="h-[10vh] md:h-[15vh]"
					/>
					<InfiniteMovingCards
						items={languagesAndTools}
						direction="left"
						speed="slow"
						className="h-[10vh] md:h-[15vh]"
					/>
				</div>
			</div>
		</section>
	);
};

export default Clients;
