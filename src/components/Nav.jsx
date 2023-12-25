import { NavLink } from "react-router-dom";

const navbarLink = [
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
  { name: "Error", url: "/error" },
];

const Nav = () => {
  return (
    <ul className="text-l fixed flex min-w-full justify-between gap-5 px-16 py-12 font-nunito font-bold text-white">
      <li className="flex items-center text-3xl transition-all duration-300 hover:-translate-y-1 hover:text-sec">
        <NavLink to="/">BECTRA</NavLink>
      </li>
      <div className=" flex gap-10">
        {navbarLink.map((link) => (
          <li
            key={link.name}
            className="flex items-center transition-all duration-300 hover:-translate-y-1 hover:text-sec"
          >
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                [isActive ? "text-sec" : ""].join(" ")
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </div>
      <li className="flex items-center transition-all duration-300 hover:-translate-y-1 hover:text-sec">
        <NavLink to="/account">Account</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
