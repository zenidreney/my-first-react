import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
    return (
        <header>
            <div>
                <img src="/profile.jpg" />
            </div>
            <h1>Deniz Yener, <span>MSc, MA</span></h1>
            <h2>Front-End Developer</h2>
            <a href="https://zenid.netlify.app">zenid.netlify.app</a>
            <a className="email-btn" href="mailto:zenid@tuta.io">
               <p> <i class="bi bi-envelope"></i><span>Email</span></p>
            </a>
        </header>
    );
}

export default Header;
