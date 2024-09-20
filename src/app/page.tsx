import type { Metadata } from "next";

import { Main } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Fizzi - Soda for Gutsy People",
		description:
			"Discover the refreshing taste of Fizzi, focused on gut health, featuring low-calorie, big-flavor drinks made with natural ingredients.",
		openGraph: {
			title: "Fizzi - Soda for Gutsy People",
			images: "/assets/image/og.png",
		},
		manifest: "/manifest.json",
	};
}

export default async function Index() {
	return <Main />;
}
