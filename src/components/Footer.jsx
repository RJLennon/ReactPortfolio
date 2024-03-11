
export default function Footer() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <footer class="page-footer red lighten-2">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
            </div>
          </div>
          <div class="footer-copyright red lighten-2">
            <div class="container">
            © 2014 Copyright Text
            </div>
          </div>
        </footer>
    );
  };