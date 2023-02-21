export const getVideoBySearch = (title) => {
  console.log(process.env.NEXT_PUBLIC_API_KEY);
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}&type=audio&key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};
