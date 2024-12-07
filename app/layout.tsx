import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ayesha's Portfolio",
	description: "Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" type="image/png" href="/a-letter-logo-modified.png" sizes="any" />
			</head>
			<body
				className={`${inter.className}`}
				style={{
					margin: 0,
					padding: 0,
					overflowX: "hidden", // Prevent horizontal scrolling
					width: "100vw",      // Restrict width to viewport width
					boxSizing: "border-box", // Ensure consistent sizing
				}}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
