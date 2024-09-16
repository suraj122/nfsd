const VideoStream = () => {
  return (
    <iframe
      className="col-span-4"
      width="100%"
      height="600"
      src="https://www.youtube.com/embed/N0_9Q-G2KL4?si=AHBKTzxFKqu-heKP"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default VideoStream;
