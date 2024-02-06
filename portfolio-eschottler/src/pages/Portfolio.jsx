import Projects from '../components/Projects'

const projects = [{
  img: "./src/assets/2api-project.png",
  repo: "https://github.com/ellysaschottler/2API-Project",
  deployed: "https://ellysaschottler.github.io/2API-Project/",
},
{
  img: "./src/assets/e-commerce-backend.png",
  repo: "https://github.com/ellysaschottler/E-Commerce_Back_End-ESchottler",
  deployed: "https://drive.google.com/file/d/1-nAonsVh8DM9OaUR6zinvysDYEs6-IRR/view",

},
{
  img: "./src/assets/html-css-portfolio.png",
  repo: "https://ellysaschottler.github.io/module2-Portfolio-ESchottler/",
  deployed: "https://github.com/ellysaschottler/module2-Portfolio-ESchottler",
},
{
  img: "./src/assets/issue-tracker.png",
  repo: "https://github.com/georgemags/Issue-Tracker",
  deployed: "https://issue-tracker-i9vg.onrender.com/",
},
{
  img: "./src/assets/social-media-api.png",
  repo: "https://github.com/ellysaschottler/Social_Media_API-ESchottler",
  deployed: "https://drive.google.com/file/d/12p4od29QgGFNBt1zgfuCaYHXd0es1VQI/view",
},
{
  img: "./src/assets/weather-api.png",
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

// rewrote as project array

  // Image:
  // <img
  //     src="./src/assets/2api-project.png"
  //     alt="A fun project pulling data from two apis."
  //     width= "20%"
  //     height= "auto"
  //   />

  // GitHub Repo: <a href="https://github.com/ellysaschottler/2API-Project"> https://github.com/ellysaschottler/2API-Project</a>

  // Deployed: <a href="https://ellysaschottler.github.io/2API-Project/"> https://ellysaschottler.github.io/2API-Project/</a>

  // Description: A project pulling data from two APIs for a unique, fun experience.
  // <br />
  // Image:
  // <img
  //     src="./src/assets/e-commerce-backend.png"
  //     alt="Screenshot - e-commerce backend"
  //     width= "20%"
  //     height= "auto"
  //   />
  // GitHub Repo: <a href="https://github.com/ellysaschottler/E-Commerce_Back_End-ESchottler"> https://github.com/ellysaschottler/E-Commerce_Back_End-ESchottler</a>
  // Walkthrough video: <a href="https://drive.google.com/file/d/1-nAonsVh8DM9OaUR6zinvysDYEs6-IRR/view"> https://drive.google.com/file/d/1-nAonsVh8DM9OaUR6zinvysDYEs6-IRR/view</a>
  // Description:
  // <br />
  // Image:
  // <img
  //     src="./src/assets/html-css-portfolio.png"
  //     alt="Screenshot - a portfolio built without libraries, using HTML and CSS"
  //     width= "20%"
  //     height= "auto"
  //   />
  // GitHub Repo: <a href="https://ellysaschottler.github.io/module2-Portfolio-ESchottler/"> https://ellysaschottler.github.io/module2-Portfolio-ESchottler/</a>
  // Deployed: <a href="https://github.com/ellysaschottler/module2-Portfolio-ESchottler"> https://github.com/ellysaschottler/module2-Portfolio-ESchottler</a>
  // Description:
  // <br />
  // Image:
  // <img
  //     src="./src/assets/issue-tracker.png"
  //     alt="Screenshot - an application for keeping track of isssues"
  //     width= "20%"
  //     height= "auto"
  //   />
  // GitHub Repo: <a href="https://github.com/georgemags/Issue-Tracker"> https://github.com/georgemags/Issue-Tracker</a>
  // Deployed: <a href="https://issue-tracker-i9vg.onrender.com/"> https://issue-tracker-i9vg.onrender.com/</a>
  // Description:
  // <br />
  // Image:
  // <img
  //     src='./src/assets/social-media-api.png' alt='Screenshot - an API for a social media site' width= '20%' height= 'auto'
  //   />
  // GitHub Repo: <a href="https://github.com/ellysaschottler/Social_Media_API-ESchottler"> https://github.com/ellysaschottler/Social_Media_API-ESchottler</a>
  // Walkthrough video: <a href="https://drive.google.com/file/d/12p4od29QgGFNBt1zgfuCaYHXd0es1VQI/view"> https://drive.google.com/file/d/12p4od29QgGFNBt1zgfuCaYHXd0es1VQI/view</a>
  // Description:
  // <br />
  // Image:
  // <img
  //     src='./src/assets/weather-api.png' alt='Screenshot - a website where you can make an API call to get the weather' width= '20%' height= 'auto'
  //   />
  // GitHub Repo: <a href="https://github.com/ellysaschottler/WeatherDashboard-ESchottler"> https://github.com/ellysaschottler/WeatherDashboard-ESchottler</a>
  // Deployed: <a href="https://ellysaschottler.github.io/WeatherDashboard-ESchottler/Develop/"> https://ellysaschottler.github.io/WeatherDashboard-ESchottler/Develop/</a>
  // Description: