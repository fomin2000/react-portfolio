import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className="navItems">
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li>About</li>
                </Link>
                <Link to="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li>Portfolio</li>
                </Link>
                <Link to="/resume" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <li>Resume</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;



