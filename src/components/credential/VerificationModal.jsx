import React from "react";
import {
  Modal,
  Text,
  Group,
  Stack,
  Divider,
  Box,
  Button,
  Avatar,
} from "@mantine/core";
import { IconCheck, IconLock, IconInfoCircle } from "@tabler/icons-react";
import { MdVerified } from "react-icons/md";
import image from "../../assets/nacc.jpg";
import { FaEthereum } from "react-icons/fa";

const VerificationModal = ({ opened, onClose, credentialInfo, client }) => {
  // Default credential info if not provided
  const defaultInfo = {
    title: "PSW DE",
    issuer: "National Association of Career Colleges",
    issuerWebsite: "https://nacc.ca",
    blockchainId:
      "0xe134e9ba6707531c57c111f4b0fc34fc16c65c79de66c3fd66c8356ca601c27a",
    owner: "Peris W. Muchiri",
    issueDate: "October 4, 2024",
    expiryDate: "Does not expire",
    history: [
      { date: client?.issuedOn, event: "Credential Issued" },
      { date: client?.issuedOn, event: "Blockchain Record Created" },
    ],
  };

  const info = credentialInfo || defaultInfo;

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
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Text fw={700} size="lg">
          Credential Verification
        </Text>
      }
      centered
      size="lg"
    >
      <Stack spacing="md">
        {/* Credential Is Verified Section */}
        <div spacing="sm" className="flex items-center gap-2">
          <div>
            <MdVerified color="green" size={55} />
          </div>
          <Stack spacing={0}>
            <Text fw={700} size="xl">
              This {client?.certification} Credential is VERIFIED
            </Text>
            <Text color="dimmed" size="sm">
              This digital credential was securely issued via Accredible and its
              information is valid.
            </Text>
          </Stack>
        </div>

        <Divider my="md" />

        {/* Issuer Information */}
        <Group position="left" spacing="sm">
          <IconCheck color="#22c55e" size={24} />
          <Text>This issuer is verified by Accredible</Text>
        </Group>

        <Group position="left" spacing="md">
          <img src={image} alt="" className="h-16 w-26" />
          <Stack spacing={1}>
            <Text fw={500}>{info.issuer}</Text>
            <a
              href="http://nacc.ca"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <Text
              component="a"
              href={info.issuerWebsite}
              color="blue"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Issuer's Website
            </Text>
          </Stack>
        </Group>

        <Divider my="md" />

        {/* Blockchain Information */}
        <Group position="left" spacing="sm">
          <Box
            style={{
              width: 24,
              height: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconLock size={24} />
          </Box>
          <Text>Credential is Blockchain Secured</Text>
        </Group>

        <Group position="left" spacing="sm" ml={30}>
          <div className="bg-blue-200 rounded-full p-1">
            <FaEthereum color="#37397a" />
          </div>
          <Stack spacing={0}>
            <Text size="sm">Blockchain ID:</Text>
            <Text size="" fw={500} style={{ wordBreak: "break-all" }}>
              {client?.blockChainId}
            </Text>
          </Stack>
        </Group>

        <Divider my="md" />

        {/* Owner Information */}
        <Group position="left" spacing="sm">
          <IconCheck color="#22c55e" size={24} />
          <Text>The owner of this credential has been verified</Text>
        </Group>

        <Group position="left" spacing="md">
          <Avatar
            name={`${client?.firstName} ${client?.lastName}`}
            color="initials"
          />
          <Stack spacing={1}>
            <Text fw={500}>
              {client?.firstName} {client?.middleName} {client?.lastName}
            </Text>
            {/* <Text component="a" href="#" color="blue" size="sm">
              View All Credentials
            </Text> */}
          </Stack>
        </Group>

        <Divider my="md" />

        {/* Date Information */}
        <Group position="apart" style={{ padding: "0 12px" }}>
          <Stack spacing={4}>
            <Text color="dimmed" size="sm">
              ISSUED ON
            </Text>
            <Text>{formatDate(client?.issuedOn)}</Text>
          </Stack>
          <Stack spacing={4} align="flex-end">
            <Text color="dimmed" size="sm">
              EXPIRES ON
            </Text>
            <Text>Does not expire</Text>
          </Stack>
        </Group>

        <Divider my="md" />

        {/* History Section */}
        <Stack spacing={4} style={{ padding: "0 12px" }}>
          <Text color="dimmed" size="sm">
            FULL CREDENTIAL HISTORY
          </Text>
          <Text>{client.issuedOn?.split("T")[0]} • Credential Issued</Text>
          <Text>
            {client.issuedOn?.split("T")[0]} • Blockchain Record Created
          </Text>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default VerificationModal;
