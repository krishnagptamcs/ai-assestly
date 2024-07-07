import { BotMessageSquare, PencilLine, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="bg-white text-white p-5">
      <ul className="gap-5 flex lg:flex-col">
        <li className=" flex-1">
          <Link
            href={"/create-chatbot"}
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-blue-300"
          >
            <BotMessageSquare className="h-6 w-6" />
            <span>Create</span>
          </Link>
        </li>
        <li className=" flex-1">
          <Link
            href={"/view-chatbots"}
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-blue-300"
          >
            <PencilLine />
            <span>View Chatbot</span>
          </Link>
        </li>
        <li className=" flex-1">
          <Link
            href={"/review-sessions"}
            className="hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md bg-blue-300"
          >
            <SearchIcon />
            <span>Review</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
