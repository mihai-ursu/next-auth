import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-blue-500">
      <p className="font-bold text-white text-4xl">Auth</p>
      <LoginButton>
        <Button variant="secondary">Log In</Button>
      </LoginButton>
    </div>
  );
}
