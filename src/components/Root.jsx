import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";
export default function Root() {
  return (
    <div className="">
      <Nav />
      <div id="detail" className="">
        <Outlet />
      </div>
    </div>
  );
}
