import React from "react";
import { IoMdClose } from "react-icons/io";

function HelpModal({ closeModal }) {
  return (
    <div className="p-4 bg-white  relative">
      {/* Close button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      >
        <IoMdClose size={24} />
      </button>

      {/* Title */}
      <h2 className="text-2xl font-medium mb-4">Help</h2>

      {/* Question text */}
      <p className="text-sm mb-4">
        Do you have a question about information on this credential or other
        courses?
      </p>

      {/* Contact Issuer button */}
      <a
        href="mailto:mcomau"
        className="w-full py-2 px-8 bg-[#4648a2] text-white rounded mb-4 hover:bg-indigo-800"
      >
        Contact Issuer
      </a>

      <hr className="my-4" />

      {/* Having difficulties text */}
      <p className="text-sm mb-4">Having other difficulties?</p>

      {/* Accredible Helpdesk button */}
      <a
        target="_blank"
        href="https://help.accredible.com/s/?language=en_US"
        className="w-full py-2 px-4 bg-[#4648a2] text-white rounded hover:bg-indigo-800"
      >
        Accredible Helpdesk
      </a>
    </div>
  );
}

export default HelpModal;
