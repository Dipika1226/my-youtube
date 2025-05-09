import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { getRandomMessage, getRandomName } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)
    const [liveMessage, setLiveMessage] = useState("")
    useEffect(() => {
        const i = setInterval(() => {
            //        API Polling
            dispatch(addMessage({
                name: getRandomName(),
                message: getRandomMessage(),
            }))
        }, 1500)
        return () => clearInterval(i);
    }, [])
    return (
        <div className='flex flex-col w-full m-8 border border-black h-[600px] rounded-xl'>
            <div className='p-2 text-xl font-bold text-center bg-gray-500 rounded-t-xl'>Top Chat</div>
            <div className='border border-y-black h-[500px] bg-gray-100 overflow-x-scroll flex flex-col-reverse'>
                {/* don't use insex as key */}
                {chatMessages.map((c, i) => (<ChatMessage key={i} name={c.name} message={c.message} />))}
            </div>
            <form className='flex justify-between p-2' onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Dipika Mishra",
                    message: liveMessage //as it is not jsx it is javascript so we need not to put it inside curly braces
                }))
                setLiveMessage("");
            }}>
                <input type='text'
                    className='w-11/12 outline-none p-1 bg-gray-300 text-sm rounded-full'
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value);
                    }}
                >
                </input>
                <button><img src='https://img.icons8.com/?size=100&id=t1QhJ1rCvYZA&format=png&color=22C3E6' className='w-8 h-8 mx-3' /></button>
            </form>
        </div>
    )
}

export default LiveChat