import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex h-[60vh] flex-col items-center justify-center gap-16 bg-red-200">
      <p>As you might have known, this is a mistake...</p>
      <Link className="text-6xl font-bold text-blue-950" to="/">
        go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
