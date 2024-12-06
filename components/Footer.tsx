import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { WavyBackground } from "./ui/WavyBackground";
const Footer = () => {
	return (
		<footer className="w-[100vw] relative" id="contact">
			{/* Wavy Background */}
			<div className="absolute inset-0 z-0 w-[100vw] left-0 top- h-[400px] ">
				<WavyBackground ht="400" />
			</div>

			{/* Content Section */}
			<div className="flex flex-col relative items-center h-[400px] z-10">
				<h1 className="heading lg:max-w-[45vw]">
					Want to get in <span className="text-purple">touch?</span>
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Let&apos;s together turn our digital vision into reality.
				</p>
				<a href="mailto:ayesha19765@gmail.com">
					<MagicButton
						title="Let's get in touch"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>

			{/* Footer Bottom Section */}
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center md:mx-[100px]">
				<p className="md:text-base text-sm md:font-normal font-light mb-10 md:mb-0">
					Made with ❤️ Ayesha
				</p>
				<div className="flex items-center md:gap-3 gap-6 z-10">
					{socialMedia.map((info, index) => (
						<a
							key={index}
							href={info.link}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<img src={info.img} alt="icons" width={20} height={20} />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
