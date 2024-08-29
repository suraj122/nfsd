const Product = ({ product }) => {
  const { title, description, thumbnail, price } = product;
  return (
    <div className="border broder-2 p-6">
      <img
        width={200}
        height={200}
        className="w-[200px]"
        src={thumbnail}
        alt="title"
      />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Product;
