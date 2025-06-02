class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="row py-3 d-flex flex-wrap justify-content-center align-items-end">
          <div class="col-4">
            <a href="index.html"><img src="img/logo.png" width="150px"/></a>
          </div>
          <div class="col-8">
            <ul class="nav justify-content-end align-items-end">
              <li class="nav-item">
                <a href="experience.html">The Experience</a>
              </li>
              <li class="nav-item">
                <a href="morocco.html">Morocco</a>
              </li>
              <li class="nav-item">
                <a href="south-africa.html">South Africa</a>
              </li>
              <li class="nav-item">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    `;
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container-fluid rg-footer">
      <footer>
        <div class="row pt-3 justify-content-center">
          <div class="col text-center">
            <img src="img/footer-logo.png" width="100px" />
            <p style="color: #ffffff;">&copy; Sourcing Africa 2023. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    `;
  }
}
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
