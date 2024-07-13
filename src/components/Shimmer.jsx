const Shimmer = () => {
  return (
    <>
      {Array(15)
        .fill(0)
        .map((item, i) => (
          <div
            key={i}
            className="h-[280px] w-full bg-gray-300 border-4 border-gray-400 rounded-lg"
          ></div>
        ))}
    </>
  );
};

export default Shimmer;
