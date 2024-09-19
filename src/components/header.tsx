import { FizziLogo } from "@/components/fizzi-logo";

export const Header:React.FC = () => {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}