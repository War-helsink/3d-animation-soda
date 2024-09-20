import * as THREE from "three";
import { Text } from "@react-three/drei";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export interface ThreeTextProps {
	sentence: string;
	color?: string;
}

export const ThreeText: React.FC<ThreeTextProps> = ({
	sentence,
	color = "white",
}) => {
	const words = sentence.toUpperCase().split(" ");

	const material = new THREE.MeshLambertMaterial();
	const isDesktop = useMediaQuery("(min-width: 950px)", true);

	return words.map((word: string, wordIndex: number) => (
		<Text
			key={`${wordIndex}-${word}`}
			scale={isDesktop ? 1 : 0.5}
			color={color}
			material={material}
			font="/fonts/Alpino-Variable.woff"
			fontWeight={900}
			anchorX={"center"}
			anchorY={"middle"}
			characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?'"
		>
			{word}
		</Text>
	));
};
