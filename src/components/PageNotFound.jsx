import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <h1>
          This Page Is not Found Right Now.Please come back later page not found
        </h1>
      <div className="text-center">
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default PageNotFound;
