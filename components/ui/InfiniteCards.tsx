"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		// name: string;
		svg: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);

	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			containerRef.current.style.setProperty(
				"--animation-direction",
				direction === "left" ? "forwards" : "reverse",
			);
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			const duration =
				speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
			containerRef.current.style.setProperty("--animation-duration", duration);
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex min-w-full shrink-0 py-0 lg:py-0 w-max flex-nowrap",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items.map((item, idx) => (
					<li
						className="w-[25vw] sm:w-[30vw] md:w-[30vw] lg:w-[10vw] max-w-full relative rounded-2xl flex-shrink-0 p-2 md:p-0 flex items-center justify-center"
						style={
							{
								// background: 'red',
								// background: 'rgb(4,7,29)',
								// backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
							}
						}
						key={idx}
					>
						<blockquote className="flex items-center justify-center gap-2 relative w-full h-full">
							{/* <div className="flex justify-center items-center w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[80px] lg:w-[110px] lg:h-[110px] xl:w-[120px] xl:h-[120px]"> */}

							<div className="flex justify-center items-center">
								<img
									src={item.svg}
									alt="icon"
									className="
			object-contain
			w-8 h-8
			sm:w-10 sm:h-10
			md:w-12 md:h-12
			lg:w-14 lg:h-14
		"
								/>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
