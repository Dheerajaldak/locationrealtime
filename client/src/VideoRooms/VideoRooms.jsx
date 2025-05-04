import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateRoomButton from "./CreateRoomButton";
import RoomJoinButton from "./RoomJoinButton";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDoubleDown,
} from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

const DUMMY_ROOMS = [
  { id: 1, participants: [{ socketId: 1, peerId: 1, username: "Aman" }] },
  { id: 2, participants: [{ socketId: 2, peerId: 2, username: "Bablu" }] },
  { id: 3, participants: [{ socketId: 3, peerId: 3, username: "Cablu" }] },
  { id: 4, participants: [{ socketId: 4, peerId: 4, username: "Dablu" }] },
  { id: 5, participants: [{ socketId: 5, peerId: 5, username: "Eablu" }] },
];

const RoomsList = ({ minimized }) => {
  const rooms = useSelector((store) => store.videoRooms.rooms); // Replace with actual data
  console.log(rooms);
  

  if (minimized) {
    return (
      <div className="overflow-x-auto sm:overflow-y-auto max-w-full sm:max-h-[60vh] p-8">
        <div className="flex flex-row sm:flex-col gap-3">
          {DUMMY_ROOMS.map((room, index) => (
            <RoomJoinButton
              key={`${room.id}-${index}`}
              creatorUsername={room.participants[0].username}
              roomId={room.id}
              amountOfParticipants={room.participants.length}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90vw] sm:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-h-[70vh] overflow-y-auto transition-all duration-300">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
          <FiUsers className="text-xl" />
          Rooms
        </h2>
        <CreateRoomButton />
      </div>

      <div className="flex flex-col gap-4">
        {DUMMY_ROOMS.map((room, index) => (
          <div
            key={`${room.id}-${index}`}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <RoomJoinButton
              creatorUsername={room.participants[0].username}
              roomId={room.id}
              amountOfParticipants={room.participants.length}
            />
            <div className="truncate">
              <p className="font-semibold text-gray-800 dark:text-white truncate">
                {room.participants[0].username}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <FiUsers />
                {room.participants.length} participant
                {room.participants.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VideoRooms = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 sm:bottom-4 sm:right-4 sm:left-auto z-50 
        flex ${
          minimized
            ? "justify-start sm:flex-col sm:items-start"
            : "justify-center sm:items-start sm:flex-col"
        } 
        px-2 sm:px-0 pb-2 sm:pb-0`}
    >
      <div
        className={`relative bg-white dark:bg-gray-900 rounded-xl shadow-xl 
          transition-all duration-300 overflow-hidden 
          ${minimized ? "w-full sm:w-auto" : "w-full sm:w-80"}`}
      >
        <RoomsList minimized={minimized} />

        {/* Toggle Minimize/Maximize Button */}
        <button
          onClick={() => setMinimized((prev) => !prev)}
          className="absolute top-2 right-2 bg-gray-700 text-white text-sm w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-600 transition"
          aria-label={minimized ? "Maximize" : "Minimize"}
        >
          {minimized ? (
            <HiOutlineChevronDoubleDown size={16} />
          ) : (
            <HiOutlineChevronDoubleUp size={16} />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoRooms;
