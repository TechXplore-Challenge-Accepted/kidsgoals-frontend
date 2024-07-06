"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleLogin } from "@/app/actions";

const ParentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isAuthenticated = handleLogin(username, password);

    if (isAuthenticated) {
      // Sync local storage with cookie for middleware check
      document.cookie = "authenticated=true; path=/;";

      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form className="w-full flex flex-col gap-4 py-4" onSubmit={onLogin}>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="text-base p-2 bg-[#d5dfe5] rounded-md"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="text-base p-2 bg-[#d5dfe5] rounded-md"
      />
      <button type="submit" className="bg-[#3c3cdf] text-white rounded-xl h-10">
        Sign In
      </button>
    </form>
  );
};

export default ParentLogin;
