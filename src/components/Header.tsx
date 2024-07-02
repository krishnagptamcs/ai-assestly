import Link from "next/link";
import React from "react";
import Avtar from "./Avtar";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
      <Avtar seed="PAPA FAM" className=""/>
        <h1>Assistly</h1>
        <h2>Your ai chat agent</h2>
      </Link>
    </header>
  );
};

export default Header;
