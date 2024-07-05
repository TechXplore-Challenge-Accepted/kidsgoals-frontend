"use client";

import { useState } from "react";

import { CgProfile } from "react-icons/cg";
import ChildLogin from "./ChildLogin";
import ParentLogin from "./ParentLogin";
import Link from "next/link";

const LoginForm = () => {
  const [isParent, setIsParent] = useState("parent");

  const switchLoginForm = (arg: string) => {
    setIsParent(arg);
  };

  return (
    <div className="w-[400px] h-[600px] bg-white rounded-md py-4 px-10">
      <div className="w-full flex flex-col items-center pt-6 pb-5">
        <CgProfile className="text-[60px]" />
        <h1 className="mt-5 mb-2 text-2xl font-semibold">Sign In</h1>
        <p>Sign in to your account</p>
      </div>
      <div className="flex bg-[#d5dfe5] rounded-md p-1">
        <button
          className={`w-1/2 h-10 font-semibold rounded-md ${
            isParent === "parent" ? "bg-white" : "bg-none"
          }`}
          onClick={() => switchLoginForm("parent")}
        >
          Parent
        </button>
        <button
          className={`w-1/2 h-10 font-semibold rounded-md ${
            isParent === "child" ? "bg-white" : "bg-none"
          }`}
          onClick={() => switchLoginForm("child")}
        >
          Child
        </button>
      </div>
      {isParent === "parent" ? <ParentLogin /> : <ChildLogin />}

      <div className="py-4 flex justify-center gap-2">
        <p className="text-[#3c3cdf]">New User?</p>
        <Link href="/signup">
          <p className="text-[#3c3cdf]">Create Account.</p>
        </Link>
      </div>

      <p className="text-[#3c3cdf] text-center">Forgot Password?</p>
    </div>
  );
};

export default LoginForm;
