import localFont from "next/font/local";

import "./globals.css";
import { Header } from "@/components/header";
import { ViewCanvas } from "@/components/view-canvas";
import { Footer } from "@/components/footer";

const alpino = localFont({
	src: "../../public/fonts/Alpino-Variable.woff2",
	display: "swap",
	weight: "100 900",
	variable: "--font-alpino",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={alpino.variable}>
			<body className="overflow-x-hidden bg-yellow-300">
				<Header />
				<main>
					{children}
					<ViewCanvas />
				</main>
				<Footer />
			</body>
		</html>
	);
}
