import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex p-2 items-'>
            <img alt='default-user' src='https://img.icons8.com/?size=100&id=11795&format=png&color=1A1A1A' className='w-10 h-10 mx-2'></img>
            <span className='px-1 font-semibold text-lg'>{name}</span>
            <span className='px-1 text-lg'>{message}</span>
        </div>
    )
}

export default ChatMessage