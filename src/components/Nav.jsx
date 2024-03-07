
export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Resume">Resume</a></li>
      </ul>
    </div>
  </nav>
  );
};
