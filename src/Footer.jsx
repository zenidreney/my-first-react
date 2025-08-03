import "bootstrap-icons/font/bootstrap-icons.css";
import codersRankIcon from "./images/codersrank.svg"
console.log(codersRankIcon)

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <a href="#">
                        <img className="icon" src={codersRankIcon} />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/zenid">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>
                   <li>
                    <a href="https://github.com/zenidreney/">
                        <i className="bi bi-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
