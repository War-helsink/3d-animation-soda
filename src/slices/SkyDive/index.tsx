"use client";

import { Bounded } from "@/components/bounded";
import { Scene } from "./scene";
import { View } from "@react-three/drei";

export const SkyDive: React.FC = () => {
	return (
		<Bounded className="skydive h-screen">
			<h2 className="sr-only">Dive into better health</h2>
			<View className="h-screen w-screen">
				<Scene
					flavor="lemonLime"
					// sentence="into better health"
				/>
			</View>
		</Bounded>
	);
};
