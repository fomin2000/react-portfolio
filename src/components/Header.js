import { Link } from "react-router-dom"
import "./Header.css"
import Nav from "./Nav"


const Header = () => {


    return (
        <div className="header">
            <nav className="navbar">
                <div>
                    <Link to="react-portfolio/" style={{ textDecoration: 'none' }}>
                        <h2 id="navTitle">Paul Fomin</h2>
                    </Link>
                </div>
                <Nav />
                <div>
                    <Link to="react-portfolio/contact">
                        <button id="contactBtn">Contact</button>
                    </Link>
                </div>
            </nav>
        </div>
    )

}

export default Header