import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);
    const getVideos = async () => {
        try {
            const response = await fetch(YOUTUBE_VIDEOS_API);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setVideos(data.items);
        }
        catch (error) {
            // <div>{error.message}</div>
            console.error(error.message);
        }
    }
    if (!videos.length) return null;
    return (
        <div className='grid grid-cols-3'>
            {videos.map((video) => (<Link to={"/watch?v=" + video.id} key={video.id}> <VideoCard info={video} /></Link>
            ))
            }
        </div >
    )
}

export default VideoContainer