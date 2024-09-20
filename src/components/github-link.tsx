export interface GithubLinkProps {
	className?: string;
}

export const GithubLink: React.FC<GithubLinkProps> = ({ className }) => {
	return (
		<a
			target="_blank"
			rel="noreferrer"
			href="https://github.com/War-helsink/3d-animation-soda"
			className={className}
		>
			<button
				type="button"
				className="relative p-3 rounded-full text-black after:absolute after:content-[''] after:rounded-full after:w-full after:h-full after:top-0 after:left-0 after:opacity-0 after:bg-[#FEE832] after:hover:opacity-5 after:hover:bg-[#989aa2]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<title>Github</title>
					<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
					<path d="M9 18c-4.51 2-5-2-7-2" />
				</svg>
			</button>
		</a>
	);
};
