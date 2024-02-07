import React from "react";
import Image from "next/image";
import Navbar from "@/Components/Navbar";

const About = () => {
  return (
    <div className="">
      <Navbar />

      <section
        id="About"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center justify-center">
              <Image src="/Logo.png" alt="About Us" width={400} height={400} />
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-3xl font-bold text-left mb-8">About Us</h2>
              <p className="text-lg text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nunc ut sollicitudin tincidunt, velit mauris tincidunt
                nunc, ac lacinia nisl nunc a mauris. Sed euismod, nunc ut
                sollicitudin tincidunt, velit mauris tincidunt nunc, ac lacinia
                nisl nunc a mauris. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed euismod, nunc ut sollicitudin tincidunt,
                velit mauris tincidunt nunc, ac lacinia nisl nunc a mauris. Sed
                euismod, nunc ut sollicitudin tincidunt, velit mauris tincidunt
                nunc, ac lacinia nisl nunc a mauris. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed euismod, nunc ut sollicitudin
                tincidunt, velit mauris tincidunt nunc, ac lacinia nisl nunc a
                mauris. Sed euismod, nunc ut sollicitudin tincidunt, velit
                mauris tincidunt nunc, ac lacinia nisl nunc a mauris.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
