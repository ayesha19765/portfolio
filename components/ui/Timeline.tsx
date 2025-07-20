"use client";
import {
	useMotionValueEvent,
	useScroll,
	useTransform,
	motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className="w-[90vw] md:w-[100vw] font-sans md:px-10" ref={containerRef}>
			<div ref={ref} className="relative w-full md:mx-auto md:pb-20 mt-20">
				{data.map((item, index) => {
					const isEven = index % 2 === 0;
					return (
						<div
							key={index}
							className="relative flex flex-col bord md:flex-row md:items-start"
						>
							<div
								className={`px-[2vw] hidden md:flex md:w-1/2 ${
									isEven ? "justify-end" : ""
								}`}
							>
								{isEven && item.content}
							</div>
							<div className="absolute left-1/2 -translate-x-1/2 z-40 hidden md:block">
								<div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
									<div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
								</div>
							</div>
							<div
								className={`px-[2vw] hidden md:flex md:w-1/2 ${
									!isEven ? "justify-start" : ""
								}`}
							>
								{!isEven && item.content}
							</div>
							<div className="md:hidden w-full md:px-4 mb-8 md:mb-0 md:mt-8 flex flex-col items-center">
								<div className="w-full">{item.content}</div>
							</div>
						</div>
					);
				})}
				<div
					style={{
						height: height + "px",
						maxHeight: "95%",
					}}
					className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] max-h-full bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] hidden md:block"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
							maxHeight: "100%",
						}}
						className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full max-h-full"
					/>
				</div>
			</div>
		</div>
	);
};
