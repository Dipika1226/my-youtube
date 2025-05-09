import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) return null;//early return
    return (
        <div className='shadow-lg w-79 pr-8 pl-2 z-10 mt-2 bg-white'>
            <ul className='font-semibold flex flex-col gap-4 px-4 pb-3 pt-4 border-b-2'>
                <Link to="/"><li className='flex gap-3'><img alt='Home' src='https://img.icons8.com/?size=100&id=14096&format=png&color=1A1A1A' className='w-8 h-8' /><p className='self-center text-lg'>Home</p></li></Link>
                <li className='flex gap-3'><img alt='Home' src='https://img.icons8.com/?size=100&id=ajczeHCWXbyR&format=png&color=000000' className='w-8 h-8' /><p className='self-center text-lg'>Shorts</p></li>
                <li className='flex gap-3'><img alt='Home' src='https://img.icons8.com/?size=100&id=87581&format=png&color=000000' className='w-8 h-8' /><p className='self-center text-lg'>Subscriptions</p></li>
            </ul>
            <h1 className='text-[20px] font-bold px-4 py-2 flex gap-3'><p>You</p><img alt='Home' src='https://img.icons8.com/?size=100&id=k7Q43nZWu9ZF&format=png&color=000000' className='w-6 h-6 self-center' /></h1>
            <ul className='text-lg font-semibold flex flex-col gap-4 p-4 border-b-2'>
                <li>History</li>
                <li>Playlists</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Liked videos</li>
                <li>Downloads</li>
            </ul>
            <h1 className='text-lg font-semibold py-3 px-4'>Subscriptions</h1>
            <ul className='text-lg font-semibold flex flex-col gap-4 pt-2 px-4 pb-4'>
                <li>Take U Forward</li>
                <li>Arsh Goyal</li>
            </ul>
        </div>
    )
}

export default Sidebar