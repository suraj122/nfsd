const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex">
      <img
        className="w-8 h-8 rounded-full"
        src="https://yt4.ggpht.com/-ZFCKWgBwVxZeCHKkP0luplg_6JIMxcz5aUMRsbkXGVaABByc68rJrkIDJi-iqMD6pbtD0MI13M=s32-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <div className="ml-2">
        <h2 className="font-bold">{name}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
