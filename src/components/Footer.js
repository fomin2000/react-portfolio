import "./Footer.css"
import GitHub from "../images/icons8-github-96.png"
import Instagram from "../images/icons8-instagram-96.png"
import LinkedIn from "../images/icons8-linkedin-circled-96.png"


const Footer = () => {
    return (
        <div className="footerCont">
            <footer className="footer">
                <div>
                    <ul id="footerItems">
                        <a href="https://github.com/fomin2000/" target="_blank"><img src={GitHub} alt="github" height="60px" width="60px"></img></a>
                        <a href="https://www.instagram.com/fominpasha___/" target="_blank"><img src={Instagram} alt="instagram" height="60px" width="60px"></img></a>
                        <a href="https://www.linkedin.com/in/paul-fomin-233233236/" target="_blank"><img src={LinkedIn} alt="linkedin" height="60px" width="60px"></img></a>
                    </ul>
                </div>
            </footer>
        </div>
    )
}


export default Footer;
