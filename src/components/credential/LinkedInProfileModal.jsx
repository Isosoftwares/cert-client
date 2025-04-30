import React, { useState } from "react";
import { Modal, Button, Text, Group, Stack, List, TextInput, Flex, Box } from "@mantine/core";
import { IconBrandLinkedin, IconCopy } from "@tabler/icons-react"; // Assuming Tabler icons are available

const LinkedInProfileModal = ({ opened, onClose, credentialLink = "https://www.credential.net/7d751cd1-b419-4928-b4" }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  
  // Function to handle copying the link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(credentialLink).catch(err => {
      console.error("Could not copy text: ", err);
    });
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text fw={700} size="lg">Add to LinkedIn profile</Text>}
      centered
      size="md"
    >
      <Stack spacing="md">
        <Text>
          Add your certification to your <Text fw={600} span>LinkedIn</Text> profile with 1 click
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
              style={{ borderRadius: '50%' }}
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
          style={{ alignSelf: 'flex-start' }}
        >
          Add to my profile
        </Button>
        
        <List spacing="md" style={{ paddingLeft: 16 }}>
          <List.Item>
            No expiration date: <Text span fw={600}>Click 'this certification does not expire' on LinkedIn</Text>.
          </List.Item>
          <List.Item>
            LinkedIn no longer shares profile updates to your network. Click the share button below to share your credential instead.
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
              style={{ borderRadius: '50%' }}
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
          style={{ alignSelf: 'flex-start' }}
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
                <Button 
                  onClick={handleCopyLink} 
                  variant="subtle"
                  compact
                  rightIcon={<IconCopy size={16} />}
                >
                  {copySuccess ? "Copied!" : "Copy link"}
                </Button>
              }
              rightSectionWidth={110}
            />
          </Flex>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default LinkedInProfileModal;