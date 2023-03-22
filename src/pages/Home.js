import { useNavigate } from "react-router-dom"
import MyImage from "../images/MyPhoto.png"
import './css/Home.css'


const Home = () => {

    let navigate = useNavigate()
    
    const clickHandler = () => {
        let path = `about`; 
        navigate(path);
    }

    return (
        <div id="homeCont">
            <div>
                <img id="myImage" src={MyImage} alt="myphoto" height="650px" width="500px"/>
            </div>
            <div id="textAndBtnCont">
                <h2>Fullstack Web Developer Creating Seamless User Experience Through Dynamic Front-end and Robust Back-end Development</h2>
                <br />
                <br />
                <br />
                <button id="moreBtn" onClick={clickHandler}>More about me?</button>
            </div>
        </div>
    )
}


export default Home;



