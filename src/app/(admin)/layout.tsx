import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col flex-1">
      {/* Headers */}
      <Header />

      <div className="flex flex-col flex-1 lg:flex-row bg-gray-100">
       <SideBar/>
        <div className="flex-1 flex justify-center lg:justify-start items-start max-w-5xl mx-auto w-full" >{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
