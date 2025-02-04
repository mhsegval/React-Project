import RamadanImage from "../assets/ramadan.png"; // Import the image
import { useNavigate } from "react-router-dom";

const RequestPickup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pickup request submitted!");
    navigate("/confirmation");
  };

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
            <h1 className="section-title">Request a Pickup</h1>
            <div className="items-center mt-[30px] px-10">
              <form onSubmit={handleSubmit} className="space-y-6 px-10">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm md:text-lg font-medium text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-2 bg-white/60 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Address Field */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-black"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="mt-1 block w-full px-4 py-2 bg-white/60 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full px-4 py-2 bg-white/60 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Pickup Time Field */}
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-black"
                  >
                    Pickup Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    className="mt-1 block w-full px-4 py-2 bg-white/60 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full btn btn-primary text-white px-4 py-2 rounded-lg hover:bg-primary transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
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

export default RequestPickup;
