import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div
      className="py-2 bg-black"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 200% 0% at top, #183EC2, #EAEEFE)",
      }}
    >
      <div className="p-[20px] md:px-[80px] lg:px-[300px]">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="Logo" className="h-14 w-12 mx-3" />
          <Bars3Icon className="h-7 w-7 mx-3 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/confirmation"}>Confirmation</Link>
            <Link to={"/aboutus"}>About Us</Link>
            <button className="btn btn-primary">
              <Link to={"/pickup"}>Request Pickup</Link>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
