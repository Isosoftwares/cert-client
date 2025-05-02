import React from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import badgeImage from "../assets/logo2.png";

function Profile() {
  const location = useLocation();
  const { client } = location?.state || {};
  console.log(client);

  return (
    <div>
      <Navbar />

      {/* Profile Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 lg:px-10 py-6">
          <div className="flex items-center py-4">
            {/* Avatar Circle */}
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
              {client?.firstName?.charAt(0)}
              {client?.lastName?.charAt(0)}
            </div>

            {/* Name and Credential Info */}
            <div>
              <h1 className="text-2xl font-medium">
                {client?.firstName}{" "}
                {client?.middleName && client.middleName.charAt(0) + "."}{" "}
                {client?.lastName}
              </h1>
              <div className="text-sm text-gray-600 mt-1">
                <span className="mr-2">1 Credential</span>
                <span className="mx-2 text-gray-400">|</span>
                <span>1 Issuer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credential Cards */}
      <div className="container mx-auto px-4 py-8 lg:px-10 min-h-[550px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Credential Card */}
          <Link to={`/${client?.slug}`}>
            <div className="group bg-white min-h-[440px] border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
              {/* Certificate Image */}
              <div className="h-56 overflow-hidden relative bg-[#b5b5d6]/10 py-12 min-h-[300px]">
                <img
                  src={
                    client?.clientDocs?.certImage ||
                    "https://via.placeholder.com/400x300"
                  }
                  alt="Certificate"
                  className="w-full h-full object-contain"
                />
                {/* Badge overlay */}
                <div className="absolute bottom-6 right-12 mb-2 mr-2">
                  <img
                    src={badgeImage}
                    alt="Badge"
                    className="w-20 h-[80px] object-contain"
                  />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-4 space-y-4 ">
                <h3 className="font-bold mb-1">
                  {client?.certification || "PSW DE"}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {new Date(client?.issuedOn).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) || "October 4, 2024"}
                </p>
                <p className="text-gray-800">
                  {"National Association of Career "}
                </p>
                <p className="text-gray-800">Colleges</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
