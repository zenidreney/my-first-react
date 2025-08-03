import "bootstrap-icons/font/bootstrap-icons.css";

import profilePic from "./images/profile.jpg";

function Header() {
    return (
        <header>
            <div>
                <img src={profilePic} alt="Picture of Deniz."/>
            </div>
            <h1>Deniz Yener, <span>MSc, MA</span></h1>
            <h2>Front-End Developer</h2>
            <a href="https://zenid.netlify.app">zenid.netlify.app</a>
            <a className="email-btn" href="mailto:zenid@tuta.io">
               <p> <i className="bi bi-envelope"></i><span>Email</span></p>
            </a>
        </header>
    );
}

export default Header;
