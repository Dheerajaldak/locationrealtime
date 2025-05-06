import React from 'react'
import { useSelector } from 'react-redux'
import Video from './Video';
import VideoRoomButtons from './VideoRoomButtons';

const ParticipantsVideos = () => {
    const inRoom = useSelector((state) => state.videoRooms.inRoom);
    const localStream = useSelector((state) => state.videoRooms.localStream);
    const remoteStream = useSelector((state) => state.videoRooms.remoteStream);
    if (!inRoom) return null;
    return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-gray-100 rounded-lg">
       
        {inRoom && localStream && <Video stream={localStream} muted/>}
        
        {inRoom && remoteStream && <Video stream={remoteStream} muted/>}
        {inRoom && <VideoRoomButtons inRoom={inRoom}/>}
    </div>
  )
}

export default ParticipantsVideos

// import React from 'react';
// import { useSelector } from 'react-redux';
// import Video from './Video';

// const ParticipantsVideos = () => {
//   const inRoom = useSelector((state) => state.videoRooms?.inRoom);
//   const localStream = useSelector((state) => state.videoRooms?.localStream);
//   const remoteStream = useSelector((state) => state.videoRooms?.remoteStream);

//   if (!inRoom) return null;

//   return (
//     <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-gray-100 rounded-lg">
//       {localStream && (
//         <Video stream={localStream} muted={true} />
//       )}
//       {remoteStream && (
//         <Video stream={remoteStream} muted={false} />
//       )}
//     </div>
//   );
// };

// export default ParticipantsVideos;

