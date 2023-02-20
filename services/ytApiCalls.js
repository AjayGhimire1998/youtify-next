export const getVideoBySearch = (title) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${title}&type=video&key=${process.env.YOUTUBE_API_KEY}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
}