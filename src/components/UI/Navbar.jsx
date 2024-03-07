export default function Nav({ links }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="left hide-on-med-and-down">
            <li>{links.map((link) => link)}</li>
        </ul>
      </div>
    </nav>
  );
}
