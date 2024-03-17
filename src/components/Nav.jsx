import { Link } from "react-router-dom";

//<Link to={user.id}>{user.name}</Link>

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo left">Rob Lennon's Profile</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </div>
  </nav>
  );
};
