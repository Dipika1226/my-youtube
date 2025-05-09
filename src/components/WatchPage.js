import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
        getComments();
    }, []);
    const getComments = async () => {
        try {
            const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${searchParams.get("v")}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data.error) {
                throw new Error(`API Error: ${data.error.message}`);
            }
            console.log(data.items);
            setComments(data.items);
            setError(null);
        }
        catch (err) {
            setError(err.message);
            console.log(err);
            // setComments([]);
        }
    }
    return (
        <div className='flex w-full m-2'>
            <div className='w-[65%]'>
                <div className='pl-8 py-7 z-0'>
                    <iframe width="850" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='rounded-3xl'></iframe>
                </div>
                <div className='px-10'>
                    <p className=' font-bold text-lg'>COMMENTS:</p>
                    {comments && comments.length > 0 ? comments.map((comment) => <Comments details={comment.snippet.topLevelComment} key={comment.id} />) : <p className='m-2 p-2 text-2xl semibold text-gray-500'>{error}</p>}
                </div>
            </div>
            <LiveChat />
        </div>
    )
}

export default WatchPage