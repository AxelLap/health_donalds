import Image from "next/image";
import healthdonals from "../assets/healthdonals.png";

const Footer = () => {
  return (
    <footer className="w-full border-y flex flex-col items-center">
      <div className="w-full  flex justify-center items-center p-[10px]">
        <div className="flex items-center">
          <Image
            src={healthdonals}
            alt="Health Donalds Logo"
            width={50}
            height={50}
          />
          <h1 className="p-left-[10] font-bold">Health Donald's</h1>
        </div>
      </div>
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Healthdonalds. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
