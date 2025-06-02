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
                <a href="south-africa.html">South Africa</a>
              </li>
              <li class="nav-item">
                <a href="egypt.html">Egypt</a>
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

class Form extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="row pt-5 pb-3 text-center">
      <div class="col">
        <h4>Discover Africa through the lens of design.<br> Join us for a once-in-a-lifetime experience.</h4>
        <p>Express your interest in our trips by filling in the form below.</p>
      </div>
    </div>
    <div class="row pb-5 justify-content-center">
      <div class="col-12 col-md-10">
        <form class="sa-form" name="contact" method="POST" netlify>
          <div class="form-row mb-3">
            <div class="col">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" name="first name" id="firstName" class="form-control form-control-lg">
            </div>
            <div class="col">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" name="last name" id="lastName" class="form-control form-control-lg">
            </div>
          </div>
          <div class="mb-3">
            <label for="emailAddress" class="form-label">Email address</label>
            <input type="email" name="email" class="form-control form-control-lg" id="emailAddress">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-2 form-select">
          <label for="inlineFormCustomSelect" class="form-label">Upcoming Trips</label>
          <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>Choose...</option>
            <option value="1">South Africa 2025</option>
            <option value="2">Egypt 2026</option>
            <option value="3">South Africa 2026</option>
          </select>
        </div>
          <div class="mb-3 form-check">
            <input type="checkbox" name="check yes for email" class="form-check-input" id="Check1">
            <label class="form-check-label" for="Check1">Yes, I want to receive email updates about all of Sourcing Africas trips.</label>
          </div>
          <button type="submit" class="btn sa-button">Submit</button>
        </form>
      </div>
    </div>
    `;
  }
}
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('contact-form', Form);
