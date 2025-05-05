import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inRoom: null,// if user will be in room - here we will saveing room id
  rooms: [],
  localStream: null,
  remoteStreams: null,
};

export const videoRoomsSlice = createSlice({
  name: "videoRooms",
  initialState,
  reducers: {
    setInRoom: (state, action) => {
      state.inRoom = action.payload;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setLocalStream: (state, action) => {
      state.localStream = action.payload;
    },
    setRemoteStreams: (state, action) => {
      state.remoteStreams = action.payload;
    },
  },
});

export const { setInRoom, setRooms, setLocalStream, setRemoteStreams} =
  videoRoomsSlice.actions;
export default videoRoomsSlice.reducer;
