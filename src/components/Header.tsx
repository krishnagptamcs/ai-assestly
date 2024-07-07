import Link from "next/link";
import React from "react";
import Avtar from "./Avtar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { SignedOut, SignInButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-white shadow-sm text-gray-800 flex justify-between p-5">
      <Link href={"/"} className="flex items-center text-4xl ">
        <Avtar seed="PAPA FAM" className="" />
        <div className="space-y-1">
          <h1>Assistly</h1>
          <h2 className="text-sm">Your ai chat agent</h2>
        </div>
      </Link>

      <div className="flex items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
