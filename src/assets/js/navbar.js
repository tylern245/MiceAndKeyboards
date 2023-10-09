class Navbar extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
        <nav class="navbar navbar-expand-md bg-navbar" style="padding: 0;">
            <a href="index.php?page=home" class="brand">
              <img src="/assets/img/keyboard-icon.png" class=" mx-2" alt="Site Logo">
              </a>
            <div class="me-5">
            <a href="index.php?page=home" style="color:black; text-decoration:none">
              <h2 style="font-size:25px;">MiceAndKeyboards.com</h2>
            </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
              <form action="index.php" method="get" class="input-group nav-item mx-auto" style="max-width: 800px">
                <input type="hidden" name="page" value="search">
                <input type="text" name="term" class="form-control" placeholder="Razer Deathadder, Ducky One 3...">
                <button class="input-group-text" id="searchButton"><i class="bi-search" style="color:black; font-size:1.2rem"></i></button>
              </form>
              <ul class="navbar-nav ms-auto text-center " style="font-size: 2rem!important">
                <li class="nav-item me-6">
                  <a href="index.php?page=sign-out" class="nav-link">
                  <i class="bi-box-arrow-right" style="color:black">
                  </i>
                  </a>
                </li>
                <li class="nav-item me-2">
                  <a href="index.php?page=sign-in" class="nav-link">
                  <i class="bi-person-circle" style="color:black">
                  </i>
                  </a>
                </li>
                <li class="nav-item me-4">
                  <a href="index.php?page=cart"class="nav-link">
                  <i class="bi-cart2" style="color:black"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav class="navbar navbar-expand-md bg-info border-bottom" style="padding: 0;">
            <div class="collapse navbar-collapse" id="navMenu">
              <ul class="navbar-nav text-center mx-auto">
                <li class="nav-item hover-item">
                  <a href="index.php?page=home" class="nav-link link-navbar">
                    Home
                  </a>
                </li>
                <li class="nav-item hover-item">
                  <a href="index.php?page=products" class="nav-link link-navbar">
                    Shop
                  </a>
                </li>
                <li class="nav-item hover-item">
                  <a href="index.php?page=products&sortby=releasedate" class="nav-link link-navbar">
                    New Arrivals
                  </a>
                </li>
                <li class="nav-item hover-item">
                  <a href="index.php?page=products&category=keyboard" class="nav-link link-navbar">
                    Keyboards
                  </a>
                </li>
                <li class="nav-item hover-item">
                  <a href="index.php?page=products&category=switch" class="nav-link link-navbar">
                    Switches
                  </a>
                </li>
                <li class="nav-item hover-item">
                  <a href="index.php?page=products&category=keycap" class="nav-link link-navbar">
                    Keycaps
                  </a>
                </li>
                <li class="nav-item hover-item">
                  <a href="index.php?page=products&category=mouse" class="nav-link link-navbar">
                    Mice
                  </a>
                </li>
                <li class="nav-item hover-item">
                  <a href="#link" class="nav-link link-navbar">
                    Keyboard FAQ
                  </a>
                </li>
                <li class="nav-item hover-item">
                  <a href="#link" class="nav-link link-navbar">
                    Switch Guide
                  </a>
                </li>
              </ul>
            </div>
          </nav>
      `
      document.body.classList.add('d-flex')
      document.body.classList.add('flex-column')
      document.body.classList.add('min-vh-100')
  }
  
}
window.customElements.define('navbar-top', Navbar)
