"use client";

import { handleLogout } from "@/app/actions";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const onLogout = () => {
    handleLogout();

    document.cookie = "authenticated=; path=/;";

    router.push("/login");
  };

  return (
    <button
      onClick={onLogout}
      className="w-[100px] h-10 bg-[#e74646] hover:bg-[#EE4E4E] border-none rounded-lg font-semibold"
    >
      გასვლა
    </button>
  );
};

export default LogoutButton;
