import Projects from '../components/Projects'

const projects = [{
  img: "./assets/2api-project.png",
  repo: "https://github.com/ellysaschottler/2API-Project",
  deployed: "https://ellysaschottler.github.io/2API-Project/",
},
{
  img: "./assets/e-commerce-backend.png",
  repo: "https://github.com/ellysaschottler/E-Commerce_Back_End-ESchottler",
  deployed: "https://drive.google.com/file/d/1-nAonsVh8DM9OaUR6zinvysDYEs6-IRR/view",

},
{
  img: "./assets/html-css-portfolio.png",
  repo: "https://ellysaschottler.github.io/module2-Portfolio-ESchottler/",
  deployed: "https://github.com/ellysaschottler/module2-Portfolio-ESchottler",
},
{
  img: "./assets/issue-tracker.png",
  repo: "https://github.com/georgemags/Issue-Tracker",
  deployed: "https://issue-tracker-i9vg.onrender.com/",
},
{
  img: "./assets/social-media-api.png",
  repo: "https://github.com/ellysaschottler/Social_Media_API-ESchottler",
  deployed: "https://drive.google.com/file/d/12p4od29QgGFNBt1zgfuCaYHXd0es1VQI/view",
},
{
  img: "./assets/weather-api.png",
  repo: "https://github.com/ellysaschottler/WeatherDashboard-ESchottler",
  deployed: "https://ellysaschottler.github.io/WeatherDashboard-ESchottler/Develop/",
},
]



export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        <p>
         <Projects projectsArray={projects}/>
        </p>
      </div>
    );
  }

