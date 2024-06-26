import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-500">
      {children}
    </div>
  );
};

export default AuthLayout;
