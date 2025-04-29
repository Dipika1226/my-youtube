import React from "react";
import { formatDuration, timeAgo } from "../utils/helper";

const VideoCard = ({ info }) => {
    const { contentDetails, snippet, statistics } = info;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;

    return (
        <div className="pb-4 m-4">
            <div className="relative">
                <img src={thumbnails?.medium?.url} className="w-full rounded-lg" alt={title} />
                <p className="absolute right-3 bottom-2 text-white bg-black py-1 px-2 rounded-lg bg-opacity-40">
                    {formatDuration(contentDetails?.duration)}
                </p>
            </div>
            <h1 className="text-2xl font-bold px-2 py-1">{title}</h1>
            <h2 className="font-semibold text-xl px-2 pb-1">{channelTitle}</h2>
            <div className="flex px-2">
                <p className="mr-3">{statistics?.viewCount} views</p>
                <li>{timeAgo(publishedAt)}</li>
            </div>
        </div>
    );
};

export default VideoCard;
