import { ArrowRightIcon } from "@heroicons/react/24/outline";
import RamadanImg from "../assets/ramadan.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip lg:px-[200px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE)",
      }}
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[500px] lg:w-[800px]">
            {/* <div className="tag"></div> */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Welcome to the Masjid Pickup
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Schedule your pickup for iftar meals, prayer timings, and more
              with ease. Join us in making this Ramadan a blessed and convenient
              experience for everyone.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link to={"/pickup"}>
                <button className="btn btn-primary">Request for Pickup</button>
              </Link>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
            <img
              src={RamadanImg}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6"
            />
            {/* <img
              src={RamadanImg}
              width={220}
              height={220}
              alt="Cylinder Image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <img
              src={RamadanImg}
              alt="Noodle Image"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg] lg-left-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
