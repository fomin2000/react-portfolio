import Project from "../components/Project";
import ComingSoon from "../images/ComingSoon.png"
import LuxuryMotors from "../images/LuxuryMotors.png"
import MarketMate from "../images/MarketMate.png"
import DayPlanner from "../images/DayPlanner.png"
import NoteTaker from "../images/NoteTaker.png"
import WeatherDashboard from "../images/WeatherDashboard.png"


const Portfolio = () => {

    const projects = [
        {
          title: "LUXURY MOTORS",
          description: "CAR RENTAL PLATFORM",
          github: "https://github.com/fomin2000/luxurymotors-rentals",
          deployed: "https://luxurymotor-rentals.herokuapp.com/"
        },
        {
          title: "MARKETMATE",
          description: "BUYING/SELLING ONLINE PRODUCTS",
          github: "https://github.com/fomin2000/MarketMate",
          deployed: "https://murmuring-garden-13552.herokuapp.com/"
        },
        {
            title: "DAY PLANNER",
            description: "WORK DAY SCHEDULER",
            github: "https://github.com/fomin2000/work-day-scheduler",
            deployed: "https://fomin2000.github.io/work-day-scheduler/"
        },
        {
            title: "NOTE TAKER",
            description: "EXPRESS BASED APPLICATION",
            github: "https://github.com/fomin2000/note-taker",
            deployed: "https://notes-taker-app.herokuapp.com/"
        },
        {
            title: "WEATHER DASHBOARD",
            description: "5-DAY FORECAST",
            github: "https://github.com/fomin2000/weather-dashboard",
            deployed: "https://fomin2000.github.io/weather-dashboard/"
        },
        {
            title: "DEVINE DATES",
            description: "ROMANTIC DATE PLANNING",
            github: "https://github.com/fomin2000/devineDates",
            deployed: "https://github.com/fomin2000/devineDates"
        },
      ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Project 
                title={projects[0].title} 
                description={projects[0].description} 
                img={LuxuryMotors} 
                github={projects[0].github} 
                deployed={projects[0].deployed}/>
            <Project 
                title={projects[1].title} 
                description={projects[1].description} 
                img={MarketMate} 
                github={projects[1].github} 
                deployed={projects[1].deployed}/>
            <Project 
                title={projects[2].title} 
                description={projects[2].description} 
                img={DayPlanner} 
                github={projects[2].github} 
                deployed={projects[2].deployed}/>
            <Project 
                title={projects[3].title} 
                description={projects[3].description} 
                img={NoteTaker} 
                github={projects[3].github} 
                deployed={projects[3].deployed}/>
            <Project 
                title={projects[4].title} 
                description={projects[4].description} 
                img={WeatherDashboard} 
                github={projects[4].github} 
                deployed={projects[4].deployed}/>
            <Project 
                title={projects[5].title} 
                description={projects[5].description} 
                img={ComingSoon} 
                github={projects[5].github} 
                deployed={projects[5].deployed}/>
        </div>
    )
}

export default Portfolio;