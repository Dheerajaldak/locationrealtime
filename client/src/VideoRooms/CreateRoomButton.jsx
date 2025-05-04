import React from "react";
import { FcVideoCall } from "react-icons/fc";
import { createVideoRoom } from "../store/actions/videoRoomAction";
const CreateRoomButton = () => {
  const handleRoomCreate = () => {
    createVideoRoom();
    
  };

  return (
    <button
      onClick={handleRoomCreate}
      className="flex items-center gap-1 bg-cyan-900 hover:bg-teal-900 text-white px-4 py-2 rounded shadow transition duration-200 text-sm"
    >
      <FcVideoCall className="text-3xl" />
      Video Call
    </button>
  );
};

export default CreateRoomButton;
