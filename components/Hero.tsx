import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords"; // Corrected import path
const words = [
	"a Full Stack Developer",
	"a DSA Enthusiast",
	"a Competitive Programmer",
	"an Aspiring Software Developer",
];

const Hero = () => {
	return (
		<div
			className="md:pb-20 md:pt-36 h-[90vh] md:h-[100vh] flex justify-center items-center"
			id="home"
		>
			{/**
			 *  UI: Spotlights
			 *  Link: https://ui.aceternity.com/components/spotlight
			 */}
			<div className="hidden md:block">
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-10 left-full"
					fill="purple"
				/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			{/**
			 *  UI: grid
			 *  change bg color to bg-black-100 and reduce grid color from
			 *  0.2 to 0.03
			 */}
			<div
				className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
			>
				{/* Radial gradient for the container to give a faded look */}
				<div
					// chnage the bg to bg-black-100, so it matches the bg color and will blend in
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 md:max-w-[95%]">
						{/* Dynamic Web Magic with Next.js */}
						Code Architect | Algorithmic Storyteller | Digital Innovator
					</p>

					{/**
					 *  Link: https://ui.aceternity.com/components/text-generate-effect
					 *
					 *  change md:text-6xl, add more responsive code
					 */}
					<TextGenerateEffect
						words="Engineering Solutions, Debugging Possibilities"
						className="text-center text-[30px] md:text-5xl lg:text-6xl"
					/>

					<div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hi! I&apos;m Ayesha,
						<FlipWords words={words} />
					</div>

					<a href="https://drive.google.com/file/d/1lfsoUD5Lp2HpybHVd3s_R-F7fJyL5j6Q/view?usp=sharing">
						<MagicButton
							title="Show my resume"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
