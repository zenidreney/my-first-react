import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
    return (
        <header>
            <img src="../public/Rectangle 90.png" />
            <h1>Laura Smith</h1>
            <h2>Front-End Developer</h2>
            <a href="#">laurasmith.website</a>
            <a href="mailto:laura@smith.com">
               <p> <i class="bi bi-envelope"></i>Email</p>
            </a>
        </header>
    );
}

export default Header;
