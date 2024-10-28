"use client";

import Image from "next/image";
import healthdonals from "../../assets/healthdonals.png";
import CartButton from "./CartButton";
const Header = () => {
  return (
    <header className="w-full border-y">
      <div className="w-full  flex justify-between items-center p-[10px]">
        <div className="flex items-center">
          <Image
            src={healthdonals}
            alt="Health Donalds Logo"
            width={50}
            height={50}
          />
          <h1 className="p-left-[10]">Health Donald's</h1>
        </div>
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
