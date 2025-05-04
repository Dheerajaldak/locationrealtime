import React from "react";

const RoomJoinButton = ({ creatorUsername, roomId, amountOfParticipants }) => {
  const handleJoinRoom = () => {
    // Implement room joining logic here
  };

  return (
    <div className="group relative inline-flex">
      <button
        onClick={handleJoinRoom}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 text-white font-bold text-xl hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl focus:outline-none"
        title={`Join ${creatorUsername}'s room`}
      >
        {creatorUsername?.[0]?.toUpperCase() || "?"}
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-gray-800 text-white px-3 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap">
        Join {creatorUsername}'s room
      </div>
    </div>
  );
};

export default RoomJoinButton;
