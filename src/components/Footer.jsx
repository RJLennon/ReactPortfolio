
export default function Footer() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <footer class="page-footer red lighten-2">
          <div class="container">
            <div class="row">
              <div class="col l1 offset-l4 m12">
                <a href="https://www.github.com">GitHub</a>
              </div>
              <div class="col l1 m12">
                <a href="https://www.linkedin.com">LinkedIn</a>
              </div>
              <div class="col l2 m12">
                <a href="https://www.stackoverflow.com">Stack Overflow</a>
              </div>
            </div>
          </div>
          <div class="footer-copyright red lighten-2">
            <div class="container">
             © 2024 Rob Lennon
            </div>
          </div>
        </footer>
    );
  };