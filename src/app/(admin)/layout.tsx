import Header from "@/components/Header";
import React from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      {/* Headers */}
      <Header />

      <div>
        {/* Sidebar */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
