import React from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addChatbox } from "../../Messenger/messengerSlice";
const ChatButton = ({ socketId, username }) => {
  const dispatch = useDispatch();

  const handleAddChatbox = () => {
    dispatch(
      addChatbox({
        username,
        socketId,
      })
    );
  };
  return (
    <div>
      <IoChatboxEllipsesOutline onClick={handleAddChatbox} size={30} />
    </div>
  );
};

export default ChatButton;
