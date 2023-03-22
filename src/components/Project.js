import "./Project.css"

const Project = (props) => {
    return (
        <div className="mainCont">
            <div class="container">
                <div class="wrapper">
                    <div class="banner-image">
                        <img src={props.img} alt={props.title} height="300px" width="100%"/>
                    </div>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                <div class="button-wrapper"> 
                    <button class="btn outline"><a href={props.github}>GitHub</a></button>
                    <button class="btn fill"><a href={props.deployed}>Deployed</a></button>
                </div>
            </div>
        </div>
    )
}

export default Project