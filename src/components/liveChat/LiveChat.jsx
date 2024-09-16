import ChatWindow from "./ChatWindow";
import VideoStream from "./VideoStream";

const LiveChat = () => {
  return (
    <div className="container mx-auto grid grid-cols-5">
      <VideoStream />
      <ChatWindow />
    </div>
  );
};

export default LiveChat;
