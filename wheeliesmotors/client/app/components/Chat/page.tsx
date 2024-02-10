import React, { useState } from "react";
import { FaComment } from "react-icons/fa";
import ChatRoom from "./ChatRoom";

const FloatingIcon = () => {
  const [showChatRoom, setShowChatRoom] = useState(false);

  const toggleChatRoom = () => {
    setShowChatRoom((prev) => !prev);
  };

  return (
    <>
      <div
        className="fixed bottom-10 right-10 bg-blue-500 p-3 rounded-full cursor-pointer"
        onClick={toggleChatRoom}
      >
        <FaComment className="text-white text-2xl" />
      </div>
      {showChatRoom && <ChatRoom />}
    </>
  );
};

export default FloatingIcon;
