import { configureStore } from '@reduxjs/toolkit';
import mapReducer from "../MapPage/MapSlice.js"
import messengerReducer from "../Messenger/messengerSlice";
import videoRoomsReducer from "../realtimeCommunication/videoRoomsSlice.jsx"
const store = configureStore({
  reducer: {
    map:mapReducer,
    messenger: messengerReducer,
    videoRooms: videoRoomsReducer,
  },
});
export default store;