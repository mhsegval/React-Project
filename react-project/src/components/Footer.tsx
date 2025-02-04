import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { XCircleIcon } from "@heroicons/react/24/outline";
export const Footer = () => {
  return (
    <footer className="bg-black text-sm text-[#BCBCBC] py-10 text-center">
      <div>
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <img src={logo} alt="Logo" className="relative h-[60px] w-12" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/pickup"}>Request Pickup</Link>
          <Link to={"/confirmation"}>Confirmation</Link>
          <Link to={"/aboutus"}>About Us</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <XCircleIcon className="h-8" />
          <XCircleIcon className="h-8" />
          <XCircleIcon className="h-8" />
          <XCircleIcon className="h-8" />
        </div>
        <p className="mt-6">&copy; 2025 MHSEGVAL, All rights reserved</p>
      </div>
    </footer>
  );
};
