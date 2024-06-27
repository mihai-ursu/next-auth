import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-y-4">
      <h1 className="text-3xl font-bold">Log In</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
