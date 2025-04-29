import React from 'react'
import CategoriesBtns from './CategoriesBtns'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
    return (
        <div className='p-6'>
            <CategoriesBtns />
            <VideoContainer />
        </div>
    )
}

export default MainContainer