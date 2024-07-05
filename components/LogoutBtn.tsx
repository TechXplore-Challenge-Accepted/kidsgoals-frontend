"use client";

import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "authenticated=; path=/;";

    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-[100px] h-10 bg-[#e74646] hover:bg-[#f36d6d] border-none rounded-lg font-semibold"
    >
      გასვლა
    </button>
  );
};

export default LogoutButton;
