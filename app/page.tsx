"use client";
import { useEffect, useState, useRef } from "react";
import { navItems } from "@/data";
import { Loader } from "@/components/Loader1";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
	// State to track loading
	const [isLoading, setIsLoading] = useState(true);

	// Ref for the Hero section with type HTMLElement
	const heroRef = useRef<HTMLElement>(null);

	// Scroll to Hero on component mount
	useEffect(() => {
		if (heroRef.current) {
			heroRef.current.scrollIntoView({ behavior: "smooth" });
		}

		// Simulate loading process (can be replaced with actual data fetching logic)
		const timer = setTimeout(() => {
			setIsLoading(false); // Set loading to false after 2 seconds
		}, 1400);

		// Clean up timer on unmount
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="min-h-screen flex justify-center items-center flex-col bg-black-100 overflow-hidden mx-auto sm:px-10 px-5 ">
			{/* Loader component */}
			<Loader
				isLoading={isLoading}
				onTransitionEnd={() => console.log("Transition ended")}
			/>

			{/* Only render the content after the loader is hidden */}
			{!isLoading && (
				<>
					<header>
						<FloatingNav navItems={navItems} />
					</header>
					<main className="max-w-7xl w-full">
						<section id="hero" ref={heroRef}>
							<Hero />
						</section>
						<section>
							<Grid />
						</section>
						<section>
							<RecentProjects />
						</section>
						<section>
							<Clients />
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
