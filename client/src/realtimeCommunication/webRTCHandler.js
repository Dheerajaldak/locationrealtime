import store from "../store/store";
import { setLocalStream, setRemoteStreams } from "./videoRoomsSlice";
import { Peer } from "peerjs";

let peer;
let peerId;

export const getPeerId = () => {
  return peerId;
};

export const getAccessToLocalStream = async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  if (localStream) {
    // console.log("Media Stream" , localStream);

    store.dispatch(setLocalStream(localStream));
  }
  return Boolean(localStream);
};

export const connectWithPeerServer = () => {
  peer = new Peer(undefined, {
    host: "localhost",
    port: 9000,
    path: "/peer",
  });
  peer.on("open", (id) => {
    console.log(" My peer id is: ", id);
    peerId = id;
  });

  peer.on("call", async (call) => {
    const localStream = store.getState().videoRooms.localStream;

    call.answer(localStream); // Answer the call with an A/V stream.
    call.on("stream", (remoteStream) => {
      console.log("remote stream came");
      store.dispatch(setRemoteStreams(remoteStream));
    });
  });
};

export const call = (data) => {
  const { newParticipantPeerId } = data;
  const localStream = store.getState().videoRooms.localStream;
  const peerCall = peer.call(newParticipantPeerId, localStream);
  peerCall.on("stream", (remoteStream) => {
    console.log("remote stream came");
    store.dispatch(setRemoteStreams(remoteStream));
  });
};

export const disconnect = () => {
  for (let conns in peer.connections) {
    peer.connections[conns].forEach((c) => {
      console.log("closing connection");
      c.peerConnection.close();
      if (c.close) c.close();
    });
  }

  store.dispatch(setRemoteStreams(null));
};
