import React from 'react'
import { useSelector } from 'react-redux'
import Video from './Video';

const ParticipantsVideos = () => {
    const inRoom = useSelector((state) => state.videoRooms.inRoom);
    const localStream = useSelector((state) => state.videoRooms.localStream);
  return (
    <div className=''>
        {inRoom && localStream && <Video stream={localStream} muted/>}
    </div>
  )
}

export default ParticipantsVideos