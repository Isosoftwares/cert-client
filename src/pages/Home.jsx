import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import CertificateHero from "../components/credential/CertificateHero";
import CredentialMain from "../components/credential/CredentialMain";
import CredentialSidebar from "../components/credential/CredentialSidebar";
import axios from "../api/axios.jsx";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@mantine/core";

function Home() {
  const { _id } = useParams();

  const getUser = () => {
    return axios.get(`/client/one/${_id}`);
  };

  const {
    isLoading: loadingUser,
    data: userData,
    refetch,
    isRefetching: refetchingUser,
  } = useQuery({
    queryKey: [`client-${_id}`],
    queryFn: getUser,
    keepPreviousData: true,
    enabled: !!_id,
  });

  const { client = {} } = userData?.data || {};

  return (
    <div className="min-h-screen flex flex-col pb-16">
      <Helmet>
        <title>
          {`${client?.certification || "PSW DE"} . ${
            client?.firstName || ""
          } . ${
            client?.LastName || ""
          } National Association of Career Colleges`}
        </title>
      </Helmet>
      <Navbar />

      {/* Certificate Hero Section */}
      <CertificateHero loadingUser={loadingUser} client={client} />

      {/* Main Credential Content */}
      {loadingUser ? (
        <div className="flex flex-col md:flex-row gap-3 px-4 lg:px-[150px] mt-4">
          <div className="w-full">
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={60} />
            <Skeleton height={100} mt={6} />
            <Skeleton height={8} mt={6} />
          </div>
          <div className="w-full flex-col gap-3 space-y-3 mt-10">
            <Skeleton h={100} />
            <Skeleton h={100} />
          </div>
        </div>
      ) : (
        <div>
          <div className="px-4 md:px-10  mx-auto  xl:px-[350px] py-8 flex-grow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - 2/3 width on large screens */}
              <div className="lg:col-span-2">
                <CredentialMain loadingUser={loadingUser} client={client} />
              </div>

              {/* Right Column - 1/3 width on large screens */}
              <div className="lg:col-span-1">
                <CredentialSidebar loadingUser={loadingUser} client={client} />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
