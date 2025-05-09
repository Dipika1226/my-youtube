import React from 'react'
import { timeAgo } from "../utils/helper";
const SearchResults = ({ id, snippet }) => {
    return (
        <div key={id.videoId || id.channelId} className=" rounded-lg flex m-8 w-[100%]">
            <div className="px-4 w-[35%] h-[240px]">
                <img
                    alt="thumbnail"
                    src={snippet?.thumbnails?.medium?.url}
                    className="rounded-lg w-full h-full"
                />
            </div>
            <div className='p-2 m-2 w-[65%]' >
                <h2 className="text-lg font-semibold mb-1">{snippet?.title}</h2>
                <h3 className='text-sm font-semibold mb-3'>{snippet?.channelTitle}</h3>
                <p className='mb-1 text-xs'>{timeAgo(snippet?.publishedAt)}</p>
                <p className='text-sm'>{snippet?.description}</p>
            </div>
        </div>

    )
}

export default SearchResults