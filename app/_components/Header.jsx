"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token"); // Read token from cookies
    setIsLoggedIn(!!token); // Convert token to boolean (true if exists, false otherwise)
  }, []);

  const handleLogout = () => {
    Cookies.remove("token"); // Remove token from cookies
    setIsLoggedIn(false);
    router.push("/"); // Redirect to homepage after logout
  };

  return (
    <div className="p-5 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <Image src="/logo.svg" alt="logo" height={100} width={160} />

      {/* Conditional Rendering: Show Dashboard if Logged In, Else Show Login */}
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <Button onClick={() => router.push("/auth/login")}>Login</Button>
      )}
    </div>
  );
}

export default Header;
