import "./ContactForm.css"


const ContactForm = () => {
    return (
        <div className="formCont">
            <h3>I'd love to connect with you! Here are some options...</h3>
            <ul>
                <li>☎️<br />Call/Text: <a href="tel:9165138997">(916)513-8997</a></li>
                <br />
                <li>✉️<br />Email: <a href="mailto:pasha.fomin11@gmail.com">pasha.fomin11@gmail.com</a></li>
                <br />
                <li>💻<br /> GitHub: <a href="https://github.com/fomin2000">fomin2000</a></li>
            </ul>
        </div>
    )
}

export default ContactForm