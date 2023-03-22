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
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <div>
                <img src={MyImage} alt="myphoto" height="650px" width="500px"/>
            </div>
            <div style={{ width: '45%', height: '270px', marginTop: '70px', marginLeft: '50px', fontFamily: 'Courier New', fontSize: '24px', background: 'lightgray', border: '2px solid grey', borderRadius: '20px' }}>
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



