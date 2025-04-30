import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import ReactPlayer from "react-player";

function Demos() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="pt-[120px] bg-greend bg-cover bg-no-repeat">
        <div className="text-center mx-auto py-5">
          <h1 className="text-light text-3xl font-bold leading-tight mb-5">
            Demo
          </h1>
          <p className="text-light max-w-xl mx-auto">
            Discover Isosales POS in action! Watch our quick demo to see how our
            POS system can transform your business.
          </p>
        </div>
      </div>

      {/* Video Demo Section */}
      <div className="flex items-center justify-center py-12 theme">
        <div className="w-full  px-4 h-[400px]">

          <p className="text-center font-bold text-3xl   ">Demo Coming soon!!!</p>
          {/* <ReactPlayer
            url="https://www.youtube.com/watch?v=iWvYYlUcxh0&ab_channel=AfricanDreamscapes"
            controls
            playing={false}
            width="100%"
            height="85vh"
            className="rounded-lg shadow-lg border-4 border-secondary"
          /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Demos;
