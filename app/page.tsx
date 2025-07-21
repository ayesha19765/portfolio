"use client";
import { useEffect, useState } from "react";
import { navItems } from "@/data";
import { Loader } from "@/components/Loader1";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
			if (typeof window !== "undefined") {
				const heroSection = document.querySelector("#hero");
				if (heroSection) {
					heroSection.scrollIntoView({ behavior: "smooth" });
				}
			}
		}, 1400);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className="min-h-screen flex justify-center items-center flex-col bg-black-100 overflow-hidden max-w-[100vw] mx-auto sm:px-10 px-5"
			style={{
				overflowX: "hidden",
				width: "100vw",
				boxSizing: "border-box",
			}}
		>
			<Loader
				isLoading={isLoading}
				onTransitionEnd={() => console.log("Transition ended")}
			/>
			{!isLoading && (
				<>
					<header className="hidden sm:block">
						<FloatingNav navItems={navItems} />
					</header>
					<main className="max-w-7xl w-full flex flex-col justify-center items-center mx-auto space-y-8 gap-[10vh]">
						<section id="hero">
							<Hero />
						</section>
						<section>
							<Grid />
						</section>
						<section>
							<TechStack />
						</section>
						<section>
							<Experience />
						</section>
						<section>
							<RecentProjects />
						</section>
					</main>
					<footer id="footer" className="py-10">
						<Footer />
					</footer>
				</>
			)}
		</div>
	);
};

export default Home;
