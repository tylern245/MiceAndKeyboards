class Footer extends HTMLElement {
    connectedCallback() {
        this.classList.add("mt-auto")
        this.innerHTML = `
        <footer class="footer bg-footer border-top">
            <div class="container py-4">
                <div class="row gx-5">
                    <div class="col-lg-4 col-md-6">
                      <a href="index.php?page=home"><img src="/assets/img/keyboard-icon.png" class="ms-2 me-2" alt="Site Logo">
                        <p class="small mb-0">&copy; MiceAndKeyboards.com</p>
                        <p class="small mb-0"> Powered by MiceAndKeyboards.com</p></a>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5 class="mb-3" style="color:mediumaquamarine; text-weight:bold">Shop</h5>
                        <ul class="list-unstyled">
                            <li><a href="index.php?page=keyboards">Keyboards</a></li>
                            <li><a href="index.php?page=switches">Switches</a></li>
                            <li><a href="index.php?page=keycaps">Keycaps</a></li>
                            <li><a href="index.php?page=mice">Mice</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5 class="mb-3" style="color:mediumaquamarine; text-weight:bold">Learn</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">Keyboard FAQ</a></li>
                            <li><a href="#">Switch Guide</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h5 class="mb-3" style="color:mediumaquamarine; text-weight:bold">Contact Us</h5>
                        <ul class="list-unstyled">
                            <li>123 Keycaps Blvd, Kalamazoo, MI 4567, United</li>
                            <li>States</li>
                            <li>+1 123-456-7890</li>
                            <li>support@keyboards.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}
window.customElements.define('site-footer', Footer)
