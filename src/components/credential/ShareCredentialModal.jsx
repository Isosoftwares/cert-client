import React from "react";
import { Modal, Group } from "@mantine/core";
import linkk from "../../assets/in.png";
import fb from "../../assets/fb.png";
import x from "../../assets/x.png";
import wa from "../../assets/wa.png";
import dot from "../../assets/dot.png";
import lin from "../../assets/lin.png";
import mess from "../../assets/mes.png";
import tg from "../../assets/tg.png";
import ble from "../../assets/sk.png";
import sms from "../../assets/sms.png";
import tk from "../../assets/tk.png";
import ut from "../../assets/ut.png";
import ig from "../../assets/ig.png";

const ShareCredentialModal = ({ opened, onClose, credentialLink }) => {
  // Function to handle copying the link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(credentialLink);
    // You could add a toast notification here
  };

  // Social media sharing links
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "linkedin",
      color: "#0077B5",
      url: "https://www.linkedin.com",
    },
    {
      name: "WhatsApp",
      icon: "whatsapp",
      color: "#25D366",
      url: "https://www.whatsapp.com",
    },
    {
      name: "Facebook",
      icon: "facebook",
      color: "#1877F2",
      url: "https://www.facebook.com",
    },
    {
      name: "Messenger",
      icon: "messenger",
      color: "#00B2FF",
      url: "https://www.messenger.com",
    },
    { name: "X", icon: "x", color: "#000000", url: "https://twitter.com" },
    {
      name: "Bluesky",
      icon: "bluesky",
      color: "#1DA1F2",
      url: "https://bsky.app",
    },
    {
      name: "Telegram",
      icon: "telegram",
      color: "#0088cc",
      url: "https://telegram.org",
    },
    { name: "SMS", icon: "sms", color: "#7D8A92", url: "sms:" },
    {
      name: "TikTok",
      icon: "tiktok",
      color: "#000000",
      url: "https://www.tiktok.com",
    },
    {
      name: "YouTube",
      icon: "youtube",
      color: "#FF0000",
      url: "https://www.youtube.com",
    },
    {
      name: "Instagram",
      icon: "instagram",
      color: "",
      url: "https://www.instagram.com",
    },
  ];

  // Function to render social icon with appropriate styling
  const renderSocialIcon = (platform) => {
    // You would replace these with actual icons or images
    switch (platform.icon) {
      case "linkedin":
        return <img src={lin} alt="" />;
      case "whatsapp":
        return <img src={wa} alt="" />;
      case "facebook":
        return <img src={fb} alt="" />;
      case "messenger":
        return <img src={mess} alt="" />;
      case "x":
        return <img src={x} alt="" />;
      case "bluesky":
        return <img src={ble} alt="" />;
      case "telegram":
        return <img src={tg} alt="" />;
      case "sms":
        return <img src={sms} alt="" />;
      case "tiktok":
        return <img src={tk} alt="" />;
      case "youtube":
        return <img src={ut} alt="" />;
      case "instagram":
        return <img src={ig} alt="" />;
      default:
        return null;
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Share Credential"
      centered
      size="md"
    >
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.slice(0, 10).map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded">
              {renderSocialIcon(platform)}
            </div>
            <span className="ml-2 text-gray-700">{platform.name}</span>
          </a>
        ))}
      </div>

      {/* Instagram gets its own row as shown in the image */}
      <div className="mt-4">
        <a
          href={socialLinks[10].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2 border border-gray-200 rounded hover:bg-gray-50 w-1/2 mx-auto"
        >
          <div
            className="w-8 h-8 flex items-center justify-center rounded"
            style={{
              background:
                "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
            }}
          >
            {renderSocialIcon(socialLinks[10])}
          </div>
          <span className="ml-2 text-gray-700">{socialLinks[10].name}</span>
        </a>
      </div>

      {/* Copy Link Button */}
      <div className="mt-6">
        <button
          onClick={handleCopyLink}
          className="w-full flex items-center justify-center p-3 border border-gray-300 rounded hover:bg-gray-50"
        >
          <span>Copy Link</span>
          <svg
            className="ml-2 h-5 w-5"
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
        </button>
      </div>
    </Modal>
  );
};

export default ShareCredentialModal;
