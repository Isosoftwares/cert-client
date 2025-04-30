import React, { useState } from "react";
import {
  Modal,
  Text,
  Group,
  Stack,
  List,
  TextInput,
  Flex,
  Box,
  Button,
} from "@mantine/core";
import image from "../../assets/rosette.svg";
import linkk from "../../assets/in.png";
import fb from "../../assets/fb.png";
import x from "../../assets/x.png";
import wa from "../../assets/wa.png";
import dot from "../../assets/dot.png";
import lin from "../../assets/lin.png";
import nacc from "../../assets/naccc.png";
import ShareCredentialModal from "./ShareCredentialModal";
import VerificationModal from "./VerificationModal";
import { MdVerified } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";

const CredentialSidebar = ({ client }) => {
  // State to control modal visibility
  const [shareModalOpened, setShareModalOpened] = useState(false);
  const [linkedInModalOpened, setLinkedInModalOpened] = useState(false);
  const [verificationModalOpened, setVerificationModalOpened] = useState(false);

  // Example credential link that will be passed to the modals
  const credentialLink = "https://www.credential.net/7d751cd1-b419-4928-b4";

  // Example credential info for verification modal
  const credentialInfo = {
    title: "PSW DE",
    issuer: "National Association of Career Colleges",
    issuerWebsite: "https://nacc.ca",
    blockchainId:
      "0xe134e9ba6707531c57c111f4b0fc34fc16c65c79de66c3fd66c8356ca601c27a",
    owner: "Peris W. Muchiri",
    issueDate: "October 4, 2024",
    expiryDate: "Does not expire",
    history: [
      { date: "2024-10-04", event: "Credential Issued" },
      { date: "2024-10-21", event: "Blockchain Record Created" },
    ],
  };

  // Handle copy functionality
  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(credentialLink).catch((err) => {
      console.error("Could not copy text: ", err);
    });
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Share Credential Section */}
      <div className="bg-[#37397a] rounded-lg p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-lg lg:text-2xl">Share Credential</h3>
            <p className="tracking-wider">
              Show this credential on your social network
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 mb-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white p-2 py-3 hover:bg-gray-50 rounded"
          >
            <button>
              <img src={linkk} alt="" />
            </button>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white p-2 py-3 hover:bg-gray-50 rounded"
          >
            <button>
              <img src={fb} alt="" />
            </button>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white p-2 py-3 hover:bg-gray-50 rounded"
          >
            <button>
              <img src={x} alt="" />
            </button>
          </a>
          <a
            href="https://wa.me/?text="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white p-2 py-3 hover:bg-gray-50 rounded"
          >
            <button>
              <img src={wa} alt="" />
            </button>
          </a>

          {/* Share Modal button */}
          <button
            className="flex items-center justify-center bg-white p-2 py-3 hover:bg-gray-50 rounded"
            onClick={() => setShareModalOpened(true)}
          >
            <img src={dot} alt="" />
          </button>
        </div>

        {/* LinkedIn Profile Button - Opens the LinkedIn modal */}
        <button
          onClick={() => setLinkedInModalOpened(true)}
          className="flex gap-2 items-center justify-center mt-10 w-full bg-white text-blue-700 py-2 px-4 rounded hover:bg-gray-100 transition font-medium"
        >
          <img src={lin} alt="" />
          <span>Add to My LinkedIn Profile</span>
        </button>
      </div>

      {/* Verification Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Credential Verification
        </h3>

        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 mt-0.5">
            <div className="rounded-full p-1">
              <MdVerified color="#37397a" size={25} />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-700">
              This credential is from a{" "}
              <span className="font-semibold">verified issuer</span>
            </p>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 mt-0.5">
            <div className="bg-blue-200 rounded-full p-1">
              <FaEthereum color="#37397a" />
            </div>
          </div>
          <div className="ml-3 flex justify-between items-center w-full">
            <p className="text-gray-700">Secured by Blockchain</p>
            <a
              href="#"
              className="text-primary hover:underline text-sm flex items-center"
            >
              Copy ID
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        <button
          className="w-full border text-[#37397a] py-2 px-4 rounded transition hover:bg-gray-50"
          onClick={() => setVerificationModalOpened(true)}
        >
          Verify Credential
        </button>
      </div>

      {/* Issuer Information Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          More about the Issuer
        </h3>

        <div className="flex items-center mb-6">
          <img src={nacc} alt="NACC Logo" className="" />
          <div className="ml-3">
            <h4 className="text-base font-medium text-gray-900">
              National Association of Career Colleges
            </h4>
          </div>
        </div>

        <a
          href="http://nacc.ca"
          target="_blank"
          className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition mb-6"
        >
          Visit Issuer Website
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

        <div>
          <h4 className="text-base font-medium text-gray-900 mb-2">
            More credentials from the Issuer
          </h4>
          <a
            href="https://www.credential.net/issuer/87963/groups"
            target="_blank"
            className="text-primary hover:underline flex items-center"
          >
            View All Credentials
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Share Credential Modal */}
      <ShareCredentialModal
        opened={shareModalOpened}
        onClose={() => setShareModalOpened(false)}
        credentialLink={credentialLink}
      />

      {/* LinkedIn Profile Modal using Mantine */}
      <Modal
        opened={linkedInModalOpened}
        onClose={() => setLinkedInModalOpened(false)}
        title={
          <Text fw={700} size="lg">
            Add to LinkedIn profile
          </Text>
        }
        centered
        size="md"
      >
        <Stack spacing="md">
          <Text>
            Add your certification to your{" "}
            <Text fw={600} span>
              LinkedIn
            </Text>{" "}
            profile with 1 click
          </Text>

          <Button
            component="a"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={
              <Box
                bg="white"
                c="#0077B5"
                w={24}
                h={24}
                style={{ borderRadius: "50%" }}
                display="flex"
                align="center"
                justify="center"
                fw={700}
              >
                in
              </Box>
            }
            color="blue"
            variant="filled"
            style={{ alignSelf: "flex-start" }}
          >
            Add to my profile
          </Button>

          <List spacing="md" style={{ paddingLeft: 16 }}>
            <List.Item>
              No expiration date:{" "}
              <Text span fw={600}>
                Click 'this certification does not expire' on LinkedIn
              </Text>
              .
            </List.Item>
            <List.Item>
              LinkedIn no longer shares profile updates to your network. Click
              the share button below to share your credential instead.
            </List.Item>
          </List>

          <Button
            component="a"
            href="https://www.linkedin.com/sharing/share-offsite/"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={
              <Box
                bg="white"
                c="#0077B5"
                w={24}
                h={24}
                style={{ borderRadius: "50%" }}
                display="flex"
                align="center"
                justify="center"
                fw={700}
              >
                in
              </Box>
            }
            color="blue"
            variant="filled"
            style={{ alignSelf: "flex-start" }}
          >
            Share
          </Button>

          <Stack spacing="xs" mt="xl">
            <Text size="xs" fw={700} color="dimmed">
              SHARE A DIRECT LINK
            </Text>
            <Flex align="stretch">
              <TextInput
                value={credentialLink}
                readOnly
                style={{ flexGrow: 1 }}
                variant="filled"
                rightSection={
                  <Button onClick={handleCopyLink} variant="subtle" compact>
                    {copySuccess ? "Copied!" : "Copy link"}
                  </Button>
                }
                rightSectionWidth={110}
              />
            </Flex>
          </Stack>
        </Stack>
      </Modal>

      {/* Verification Modal */}
      <VerificationModal
        opened={verificationModalOpened}
        onClose={() => setVerificationModalOpened(false)}
        credentialInfo={credentialInfo}
        client={client}
      />
    </div>
  );
};

export default CredentialSidebar;
