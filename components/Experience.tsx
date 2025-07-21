import React from "react";
import { Timeline } from "./ui/Timeline";

// --- Data for your experiences ---
// I've structured this data to be cleaner and easier to manage.
const experiences = [
	{
		company: "ServiceNow",
		role: "Associate Software Engineering Intern",
		date: "May 2025 – Present",
		location: "Hyderabad, On-site",
		points: [
			"Designed and built the Playbook Summarization modal using Seismic and Now Assist Skill Kit, improving workflow clarity and reducing context-switching.",
			"Developed a custom multi-record selector using activity definitions, enabling bulk selection and reducing manual configuration time.",
			"Enhanced modal interactions by refining communication, error handling, and action dispatching for a seamless user experience.",
			"Collaborated with cross-functional teams to deliver scalable components, improving workflows and accelerating feature delivery.",
		],
		icon: (
			<a
				href="https://www.servicenow.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="https://cdn.icon-icons.com/icons2/2699/PNG/512/servicenow_logo_icon_168835.png"
					alt="ServiceNow Logo"
					className="h-8 w-8 md:h-20 md:w-20  object-contain"
				/>
			</a>
		),
	},
	{
		company: "YahWeh Solutions",
		role: "Full Stack Web Developer Intern",
		date: "April 2024 – Dec 2024",
		location: "Bangalore, Remote",
		points: [
			"Revamped key website components and applied responsive design principles, boosting user engagement.",
			"Created and maintained a dynamic testimonial CRUD system, increasing content flexibility and reducing admin effort.",
			"Integrated React Helmet to optimize SEO, improving discoverability through search engines.",
			"Enhanced the Liquofy product page by resolving multiple bugs, improving responsiveness, and reducing load time.",
			"Built and connected RESTful APIs with robust end-to-end testing, ensuring seamless functionality across frontend-backend flows.",
		],

		icon: (
			<a
				href="https://in.linkedin.com/company/yahweh-innovations"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="https://media.licdn.com/dms/image/v2/D560BAQHiyy0a6KVSYQ/company-logo_200_200/company-logo_200_200/0/1721414643057/yahweh_innovations_logo?e=1755734400&v=beta&t=he8Gsoe_ZGWkLGH9bTReXkmcAKpAKGXhaqvv8W-0loE"
					alt="YahWeh Solutions Logo"
					className="h-8 w-8 md:h-20 md:w-20 object-contain"
				/>
			</a>
		),
	},
];

export function Experience() {
	const timelineData = experiences.map((exp) => ({
		title: exp.date,
		content: <ExperienceCard {...exp} />,
	}));

	return (
		<div id="experience" className="relative w-[100vw] overflow-clip  h-[fit] p-4 md:p-8">
			<h1 className="heading">
				My
				<span className="text-purple"> Professional Journey</span>
			</h1>
			<Timeline data={timelineData} />
		</div>
	);
}

// --- A new, more attractive component for rendering each experience ---

const ExperienceCard = ({
	company,
	role,
	location,
	points,
	icon,
	date,
}: {
	company: string;
	role: string;
	location: string;
	points: string[];
	icon: React.ReactNode;
	date: string;
}) => (
	<div className="w-full group/card">
		<div
			className={cn(
				"cursor-pointer overflow-hidden relative card h-[fit] rounded-xl shadow-[0_0_60px_10px_rgba(59,130,246,0.3)] shadow-blue-200/40 dark:shadow-blue-900/40 border border-neutral-200 dark:border-neutral-800 w-full mx-auto backgroundImage flex flex-col p-4",
				"bg-[url('/bg.png')] bg-cover"
			)}
		>
			<div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
			<div className="flex flex-row items-center space-x-4 z-10 ">
				<div className="flex h-10 w-10 md:h-22 md:w-22  items-center justify-center object-cover">
					{icon}
				</div>
				<div className="flex flex-col">
					<p className="font-normal text-base md:text-lg text-gray-50 relative z-10">
						{company}
					</p>
					<p className="text-sm md:text-base text-gray-400">{role}</p>

					<div className="flex flex-col  md:flex-row md:items-center gap-1 md:gap-2 mt-0.5">
						<p className="text-sm md:text-base text-gray-300">{location}</p>
						<p className="text-sm md:text-base text-gray-300 hidden md:block">
							|
						</p>
						<p className="text-sm md:text-base text-gray-300">{date}</p>
					</div>
				</div>
			</div>
			<div className="text content z-10 ">
				<ul className="list-none space-y-3 mt-4">
					{points.map((point, index) => (
						<li key={index} className="flex items-start gap-3">
							<CheckIcon />
							<p className="text-base text-gray-50">{point}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
);
// Utility for className merge (from shadcn/ui)
import { cn } from "@/lib/utils";

// --- Icon Components ---
function BriefcaseIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="h-6 w-6 text-blue-600 dark:text-blue-400"
		>
			<path
				fillRule="evenodd"
				d="M7.5 5.25A2.25 2.25 0 019.75 3h4.5a2.25 2.25 0 012.25 2.25v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v.75a.75.75 0 01-1.5 0v-.75z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M3.75 8.25A2.25 2.25 0 016 6h12a2.25 2.25 0 012.25 2.25v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h12a.75.75 0 00.75-.75v-1.5a.75.75 0 011.5 0v1.5A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25V8.25z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function CheckIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500 drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]"
		>
			<path
				fillRule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
