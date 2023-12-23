import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <p>As you might have known, this is a mistake...</p>
      <Link to="/">go back home</Link>
    </div>
  );
};

export default ErrorPage;
