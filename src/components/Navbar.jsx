import { NavLink } from "react-router-dom";
import { Nav } from "../styles";
import { title, routes } from "../lib/labels.json";

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <span>{title}</span>
        </li>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink to={route.path}>{route.label}</NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Navbar;
