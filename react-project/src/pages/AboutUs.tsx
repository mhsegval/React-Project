import { Link } from "react-router-dom";
import RamadanImage from "../assets/ramadan.png";
const AboutUs = () => {
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
          <div className="md:w-[500px] lg:w-[800px] lg:p-[60px] flex flex-col items-center gap-5">
            {/* <div className="tag"></div> */}
            <h1 className="section-title px-3">About Us</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              alias illum numquam molestiae saepe, quam dicta quia perferendis
              dolores a ad quis nihil beatae ea minus? A in culpa rerum!
            </p>
            <Link
              to="/"
              className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-primary transition-all duration-300"
            >
              Return to Home
            </Link>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
            <img
              src={RamadanImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
