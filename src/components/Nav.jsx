
export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo left">Rob Lennon's Profile</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">About</a></li>
        <li><a href="/Portfolio">Portfolio</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Resume">Resume</a></li>
      </ul>
    </div>
  </nav>
  );
};
