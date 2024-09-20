import clsx from "clsx";

export interface ButtonProps {
	href?: string;
	text?: string;
	target?: React.HTMLAttributeAnchorTarget;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	href,
	target,
	text,
	className,
}) => {
	return (
		<a
			className={clsx(
				"rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
				className,
			)}
			target={target}
			href={href}
		>
			{text}
		</a>
	);
};
