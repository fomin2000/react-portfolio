import "./ResumeComp.css"
import Resume1 from "../images/Screen Shot 2023-03-20 at 12.56.21 PM.png"
import Resume2 from "../images/Screen Shot 2023-03-20 at 12.56.36 PM.png"

const ResumeComp = () => {

    const clickHandler1 = () => {
        fetch(Resume1).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = Resume1;
                alink.click();
            })
        })
    }

    const clickHandler2 = () => {
        fetch(Resume2).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = Resume2 ;
                alink.click();
            })
        })
    }

    return (
        <div className="resumeCont">
            <div className="imgCont">
                <img src={Resume1} alt="resume1" width="90%" height="100%"/>
                <button id="dwnBtn1" className="dwnBtn" onClick={clickHandler1}>Download Page 1</button>
            </div>
            <div className="imgCont">
                <img src={Resume2} alt="resume2" width="90%" height="100%"/>
                <button id="dwnBtn2" className="dwnBtn" onClick={clickHandler2}>Download Page 2</button>
            </div>
        </div>
    )
}

export default ResumeComp;