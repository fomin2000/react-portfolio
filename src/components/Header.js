import "./Header.css"


const Header = () => {

    return (
        <div className="header">
            <nav className="navbar">
                <div>
                    <h2 id="navTitle"><a href="/">Paul Fomin</a></h2>
                </div>
                <div>
                    <ul className="navItems">
                        <li><a href="/about">About</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/resume">Resume</a></li>
                    </ul>
                </div>
                <div>
                    <button id="contactBtn">Contact</button>
                </div>
            </nav>
        </div>
    )

}

export default Header