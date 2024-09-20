import { Hero } from "./Hero";
import { Carousel } from "./Carousel";
import { SkyDive } from "./SkyDive";
import { AlternatingText } from "./AlternatingText";
import { BigText } from "./BigText";

export const Slices: React.FC = () => {
	return (
		<>
			<Hero />
			<SkyDive />
			<Carousel />
			<AlternatingText />
			<BigText />
		</>
	);
};
