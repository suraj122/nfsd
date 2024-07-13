import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return <h1>{params.id.toUpperCase()}</h1>;
};

export default User;
