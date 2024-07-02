import { FaLocationArrow } from 'react-icons/fa6';

import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FlipWords } from './ui/FlipWords'; // Corrected import path
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from './ui/TextReveal';

const words = [
	'a Full Stack Developer',
	'a DSA Enthusiast',
	'a Competitive Programmer',
	'an Aspiring Software Developer',
];

const Hero = () => {
	return (
		<div className="flex justify-center items-center pb-20 pt-36 min-h-[100vh]">
			<div>
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

			<div
				className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
			>
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<div className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
						{/* Dynamic Web Magic with Next.js */}
						Doing something that fascinates me
						{/* An inquisitive programmer and innovative developer. */}
					</div>

					<TextGenerateEffect
						words="Transforming Concepts into Seamless User Experiences"
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
					/>

					<div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hi! I&apos;m Ayesha,<FlipWords words={words} />
					</div>
					{/* <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
						<TextRevealCard
							text="Raj and Ayesha"
							revealText="Besties Forever"
						>
							<TextRevealCardTitle>
								Hi, jar
							</TextRevealCardTitle>
							<TextRevealCardDescription>
								Something small for you
							</TextRevealCardDescription>
						</TextRevealCard>
					</div> */}
					<a href="/about">
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
