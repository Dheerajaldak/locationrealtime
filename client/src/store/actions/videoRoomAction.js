import { v4 as uuid } from "uuid";
import store from "../store";
import { setInRoom } from "../../realtimeCommunication/videoRoomsSlice";
import * as socketConn from "../../socketConnection/socketConn";

export const createVideoRoom = async () => {
  const newRoomId = uuid();
  store.dispatch(setInRoom(newRoomId));

  socketConn.createVideoRoom({
    peerId: 1,
    newRoomId,
  });
};
