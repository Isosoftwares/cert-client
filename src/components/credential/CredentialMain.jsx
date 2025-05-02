import React, { useState } from "react";
import logo from "../../assets/naccc.png"; // Adjust the path as necessary
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { MdHelpOutline } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Avatar, Divider, Menu, Modal } from "@mantine/core";
import Graph from "../Graph";
import HelpModal from "./HelpModal";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const CredentialMain = ({ client, loadingUser }) => {
  const [openedHelpModal, { open, close }] = useDisclosure(false);
  const [opened, setOpened] = useState(false);
  function splitStringToArray(input) {
    return (
      input
        .split(",")
        .map((str) => str.trim())
        .filter((str) => str.length > 0) || [""]
    ); // optional: removes empty strings
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    if (dateString === "Does not expire") return "Does not expire";

    const parts = dateString.split("-");
    if (parts.length !== 3) return dateString;

    const [year, month, day] = parts;
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthIndex = parseInt(month, 10) - 1;
    if (monthIndex < 0 || monthIndex > 11) return dateString;

    return `${monthNames[monthIndex]} ${parseInt(day, 10)}, ${year}`;
  };

  return (
    <div className="space-y-8">
      <Modal
        opened={openedHelpModal}
        onClose={close}
        centered
        withCloseButton={false}
      >
        <HelpModal closeModal={close} />
      </Modal>
      {/* Credential Header Section */}
      <div className="pb-6">
        <div className="flex items-center mb-4">
          <div className="flex ">
            <img src={logo} alt="NACC Logo" className=" rounded-full" />
            <a
              href="http://nacc.ca"
              target="_blank"
              className="ml-2 text-primary hover:underline flex items-center font-[1.5rem] md:text-2xl"
            >
              National Association of Career Colleges
              <FaArrowUpRightFromSquare className="mx-2" />
            </a>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          {client?.certification}
        </h1>
        <div className="flex flex-wrap mt-4 gap-4">
          <a
            href={client?.clientDocs?.certPdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center text-gray-700  hover:bg-gray-200 rounded-md px-3 py-1 text-sm">
              <FaRegFilePdf className="px" />
              <span className="px-2">PDF</span>
            </button>
          </a>
          <a
            href="https://api.accredible.com/v1/credential/generate_baked_badge?credential_id=117504374&_gl=1*1x5lqsj*_gcl_au*MTI0MDA0MzYyMi4xNzQ1NzQyNDg5*_ga*MjA2OTc2NDQzMy4xNzQ1NzQyNDkw*_ga_FSDJZHHBH0*MTc0NTgzOTUxNC45LjEuMTc0NTgzOTUyOC40Ni4wLjE3MzgzNzIyMA.."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center text-gray-700  hover:bg-gray-200 rounded-md px-3 py-1 text-sm">
              <CiImageOn className="px" />
              <span className="px-2">BADGE</span>
            </button>
          </a>
          <button
            onClick={open}
            className="flex items-center text-gray-700  hover:bg-gray-200 rounded-md px-3 py-1 text-sm"
          >
            <MdHelpOutline className="px" />
            <span className="px-2">HELP</span>
          </button>
          <Menu shadow="md" width={250}>
            <Menu.Target>
              <button className="flex items-center text-gray-700  hover:bg-gray-200 rounded-md px-3 py-1 text-sm">
                <span className="px-2">MORE</span>
                <IoMdArrowDropdown className="px" />
              </button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>
                {/* Contact Issuer Button */}
                <a
                  href="mailto:mcomau"
                  className="flex items-center w-full py-2 px-3 mb-3 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <span className="mr-3 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span className="font-medium text-gray-900">
                    Contact Issuer
                  </span>
                </a>
              </Menu.Item>
              <Menu.Item>
                {/* More Information Button */}
                <a
                  target="_blank"
                  href="https://help.accredible.com/s/?language=en_US"
                  className="flex items-center w-full py-2 px-3 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <span className="mr-3 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="font-medium text-gray-900">
                    More Information
                  </span>
                </a>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className="mt-4">
          <a
            href="https://v2.accounts.accredible.com/login"
            target="_blank"
            className="text-primary hover:underline"
          >
            Sign in to access more options
          </a>
        </div>
      </div>

      {/* Credential Info Section */}
      <div className="pb-3">
        <div className="flex items-center mb-4">
          <Avatar
            name={`${client?.firstName} ${client?.lastName}`}
            color="initials"
            allowedInitialsColors={["white"]}
            className="bg-[#4200FF]"
          />
          <div className="ml-3">
            <h2 className="text-lg font-medium text-gray-900">
              {`${client?.firstName} ${client?.middleName} ${client?.lastName}`}
            </h2>
            <Link
              to={`/profile/${client?.firstName}${client?.lastName}/wallet`}
              className="text-primary hover:underline text-sm"
              state={{ client: client }}
            >
              View All Credentials
            </Link>
          </div>
        </div>
      </div>
      <Divider />

      {/* Details Section */}
      <div className="pb-6">
        <div className="prose max-w-none">
          <p className="text-gray-700">
            {client?.courseDescription ||
              " This certificate is issued for satisfactorily completing the NACC final examination for the Personal Support Worker (PSW) program which was comprised of the following modules: "}
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {splitStringToArray(client?.modules || "")?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <p className="mt-4 text-gray-700">Total Hours: 700</p>
          <p className="mt-4 text-gray-700">
            Employers should only accept these credentials with the
            corresponding college diploma and/or transcript for the Personal
            Support Worker Distance Education program.
          </p>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <div className="w-full">
              <h3 className="text-sm font-medium text-gray-500">ISSUED ON</h3>
              <p className="text-base text-gray-900">
                {formatDate(client?.issuedOn)}
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-sm font-medium text-gray-500">EXPIRES ON</h3>
              <p className="text-base text-gray-900">Does not expire</p>
            </div>
          </div>

          {/* Evidence Section */}
          <div className="pb-6 mt-10 ">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Evidence</h3>
            <div className="py-6 mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Graph graphData={client?.graphData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredentialMain;
