import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="fixed flex gap-5 font-ibm text-4xl text-sec">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li className="font-nunito">
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/error">Error</Link>
      </li>
    </ul>
  );
};

export default Nav;
