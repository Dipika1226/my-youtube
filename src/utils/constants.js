// export const GOOGLE_API_KEY = "AIzaSyCgtm_3GL6oJVwrFClvHIP8tvcOxQDv7FY";
export const OFFSET_LIVE_CHAT = 25;
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOCATEGORIES_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
