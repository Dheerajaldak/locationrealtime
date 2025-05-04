import io from "socket.io-client";
import {
  onlineUsersHandler,
  userDisconnectedHandler,
} from "../store/actions/usersActions";
import { chatMessageHandler } from "../store/actions/messengerAction";
import { videoRoomsListHandler } from "../store/actions/videoRoomAction";
let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");
  // socket = io("https://webrtcsockeiolocation.onrender.com");

  socket.on("connect", () => {
    console.log("connected to socket.io");
  });

  socket.on("online-users", (usersData) => {
    console.log(usersData);
    onlineUsersHandler(socket.id, usersData);
  });

  socket.on("chat-message", (messagedata) => {
    // console.log('message received',messagedata);
    chatMessageHandler(messagedata);
  });

  socket.on("video-rooms", (videoRooms) => {
    console.log("new list of room received");
    videoRoomsListHandler(videoRooms);
  });

  socket.on("user-disconnected", (disconnectedUserSocketId) => {
    userDisconnectedHandler(disconnectedUserSocketId);
  });
};

export const login = (data) => {
  socket.emit("user-login", data);
};

export const sendChatMessage = (data) => {
  socket.emit("chat-message", data);
};

export const createVideoRoom = (data) => {
  socket.emit("video-room-create", data);
};
