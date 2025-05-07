import React, { useEffect, useState } from 'react'

const Comments = ({ details }) => {
    const { snippet } = details;
    const [showReplies, setShowReplies] = useState(false);
    const { id } = details;
    const [replies, setReplies] = useState([]);
    useEffect(() => {
        getReplies();
    }, []);
    const getReplies = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=${id}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
        const data = await response.json();
        setReplies(data.items);
        console.log(data)
    }
    return (
        <div className='flex px-2 py-[8px] items-start hover:bg-gray-300 scroll-smooth'>
            <img alt='default-user' src='https://img.icons8.com/?size=100&id=11795&format=png&color=1A1A1A' className='w-10 h-10 mx-3'></img>
            <div>
                <h3 className='font-semibold text-lg'>{snippet.authorDisplayName}</h3>
                <p className='text-lg'>{snippet.textOriginal}</p>
                <div>
                    <button className='text-sm font-bold p-2'>like</button>
                    <button className='text-sm font-bold p-2'>dislike</button>
                    <button className='text-sm font-bold p-2'>Reply</button>
                </div>
                <button className='text-sm font-bold text-blue-400' onClick={() => setShowReplies(!showReplies)}>Replies</button>
                {/* nested comments */}
                {showReplies && (replies.map((reply) => <Comments details={reply} key={reply.id} />))}
            </div>
        </div>
    )
}

export default Comments