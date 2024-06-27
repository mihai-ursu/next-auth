import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
  title: string;
}

const Header = ({ label, title }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
