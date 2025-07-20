"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
	return (
		<div id="projects">
			<h1 className="heading">
				A small selection of{" "}
				<span className="text-purple">recent projects</span>
			</h1>
			<div className="flex flex-wrap items-center justify-around gap-16 ">
				{projects.map((item) => (
					<div
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 md:min-w-[400px] "
						key={item.id}
					>
						{/* Large screens */}
						<div className="hidden md:block">
							<PinContainer
								title="Visit"
								href={item.link}
								className="w-[80vw] md:w-[30vw]"
							>
								<a href={item.link}>
									<div className="relative flex items-center justify-center w-[75vw] md:w-[28vw] overflow-hidden h-[20vh] lg:h-[30vh] m-4">
										<div
											className="relative w-full h-full overflow-hidden"
											style={{ backgroundColor: "#13162D" }}
										>
											<img
												src="/bg.png"
												alt="bgimg"
												className="w-full h-full object-cover"
											/>
										</div>
										<img
											src={item.img}
											alt="cover"
											className="z-10 absolute bottom-0 rotate-6 max-h-full max-w-full object-contain"
										/>
									</div>

									<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
										{item.title}
									</h1>

									<p
										className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
										style={{
											color: "#BEC1DD",
											margin: "1vh 0",
										}}
									>
										{item.des}
									</p>

									<div className="flex items-center justify-between mt-7 mb-3">
										<div className="flex items-center">
											{item.iconLists.map((icon: string, index: number) => (
												<div
													key={index}
													className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
													style={{
														transform: `translateX(-${5 * index + 2}px)`,
													}}
												>
													<img src={icon} alt="icon" className="p-2" />
												</div>
											))}
										</div>

										<div className="flex justify-center items-center">
											<p className="flex lg:text-xl md:text-xs text-sm text-purple">
												Check Live Site
											</p>
											<FaLocationArrow className="ms-3" color="#CBACF9" />
										</div>
									</div>
								</a>
							</PinContainer>
						</div>

						{/* Small screens */}
						<div className="block md:hidden border-white/[0.2] border rounded-sm p-[10px]">
							<div className="relative flex items-center justify-center w-[75vw] overflow-hidden h-[20vh] lg:h-[30vh] m-4">
								<div
									className="relative w-full h-full overflow-hidden"
									style={{ backgroundColor: "#13162D" }}
								>
									<img src="/bg.png" alt="bgimg" />
								</div>
								<img
									src={item.img}
									alt="cover"
									className="z-10 absolute bottom-0 rotate-6"
								/>
							</div>

							<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
								{item.title}
							</h1>

							<p
								className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 "
								style={{
									color: "#BEC1DD",
									margin: "1vh 0",
								}}
							>
								{item.des}
							</p>

							<div className="flex items-center justify-between mt-7 mb-3">
								<div className="flex items-center">
									{item.iconLists.map((icon: string, index: number) => (
										<div
											key={index}
											className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
											style={{
												transform: `translateX(-${5 * index + 2}px)`,
											}}
										>
											<img src={icon} alt="icon" className="p-2" />
										</div>
									))}
								</div>

								<div className="z-10">
									<a
										href={item.link}
										className="flex justify-center items-center"
									>
										<p className="flex lg:text-xl md:text-xs text-sm text-purple">
											Check Live Site
										</p>
										<FaLocationArrow className="ms-3" color="#CBACF9" />
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentProjects;
