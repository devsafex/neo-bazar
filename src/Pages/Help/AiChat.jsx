import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import Logo from "../../Shaired/Logo";
import AiSpeedDial from "./AISpeedDial";
import MessagingChat from "./MessagingChat";
import { SendMessageInput } from "./SendMessageInput";

export function AiChat() {
  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  return (
    <>
      <div>
        {/* Icon Radiation Animation */}
        <div className="fixed bottom-28 lg:bottom-24 right-20 lg:right-24">
          <motion.div
            className="absolute inset-0 w-16 h-16 bg-green-400 rounded-full opacity-50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        {/* Speed Dial */}
        <div
          onClick={openDrawerBottom}
          className="flex items-center justify-center gap-4 py-3 fixed bottom-11 lg:bottom-7 right-6 lg:right-10 z-10 cursor-pointer"
        >
          <AiSpeedDial />
        </div>
      </div>
      {/* ChatBox Drawer */}
      <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4 bg-gray-50"
      >
        <div className="lg:mb-0 flex items-center justify-between w-full lg:w-5/6 mx-auto z-10">
          {/* Logo */}
          <Typography variant="h5" color="blue-gray">
            <Logo />
          </Typography>
          {/* Cross Button */}
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerBottom}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* Chat Area */}
        <div className="w-3/4 md:w-2/3 lg:w-1/2 h-60 overflow-y-scroll absolute top-3 left-16 md:left-44 lg:left-1/4">
          {/* Dummy Encrypt message title */}
          <Typography
            color="gray"
            className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto mb-4 p-2 font-normal bg-gray-100 text-xs text-yellow-600 text-center flex gap-1"
          >
            <FaLock className="pt-1 text-2xl lg:text-base" /> Messages are
            end-to-end encrypted. No one outside of this chat, no one can read
            or listen to them. Click to learn more.
          </Typography>
          {/* Conversations */}
          <MessagingChat />
          {/* Send Icon & Message Input Area */}
          <SendMessageInput />
        </div>
      </Drawer>
    </>
  );
}
