import React, { act, useState } from "react";
import logo2 from "../../assets/logo2.png";
import cert from "../../assets/cert.png";
import { Skeleton } from "@mantine/core";

const CertificateHero = ({ client, loadingUser }) => {
  const [activeTab, setActiveTab] = useState("cert");
  return (
    <div className="bg-gray-100 py-8">
      {loadingUser ? (
        <div className="flex justify-center">
          <Skeleton h={500} w={600} />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex flex-col-reverse  lg:grid lg:grid-cols-4 gap-">
            {/* Left Column - Certificate Thumbnail and Badge */}
            <div className="col-span-1 flex justify-center lg:justify-start  lg:flex-col items-center">
              <div
                onClick={() => {
                  setActiveTab("cert");
                }}
                className={` ${
                  activeTab === "cert" && "bg-[#C8C8C8]"
                } flex justify-center items-center p-4 rounded-md mb-4 `}
              >
                <img
                  src={client?.clientDocs?.certImage}
                  alt="Certificate thumbnail"
                  className="  lg:w-[120px] h-[100px] object-cover"
                />
              </div>
              <div
                onClick={() => {
                  setActiveTab("logo");
                }}
                className={` ${
                  activeTab === "logo" && "bg-[#C8C8C8]"
                } flex justify-center items-center p-4 0 rounded-md mb-4 lg:w-[50%] `}
              >
                <img src={logo2} alt="NACC Logo" className="w-16 h-16" />
              </div>
            </div>

            {/* Right Column - Full Certificate */}
            <div className="col-span-3 ">
              <div className=" rounded-md overflow-hidden">
                {/* Blue header */}

                {/* Certificate content */}
                {activeTab === "cert" ? (
                  <div className=" flex flex-col it cursor-pointer">
                    <img
                      src={client?.clientDocs?.certImage}
                      alt="Certificate"
                      className="  lg:w-[700px] lg:h-[500px] object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex min-h-[300px] flex-col items-center cursor-pointer">
                    <img src={logo2} alt="Logo" className=" object-cover" />
                  </div>
                )}
                <div className="p-8 flex flex-col items-center"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateHero;
