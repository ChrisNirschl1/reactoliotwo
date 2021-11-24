
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
  <header>  
    <h1> Christian Nirschl</h1>
    <nav>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#work-page">Work</a>
        </li>
        <li>
          <a href="#contact-link">Contact Me</a>
        </li>
        <li>
          <a href=".//2021 Resume Christian Mark Nirschl.pdf">Resume</a>
        </li>
      </ul>
    </nav>
  </header>
  <div className="top-banner">
    <div className="card-caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt esse, ed suscipit in
      sunt culpa, delectus ipsam. Cumque, ullam rerum?</div>
  </div>
  <section className="main-block">
    <div className="title-side">
      <h2> About me</h2>
    </div>
    <aside className="content-side">
      <div id="about-me">
        <p>My name is Christian Nirschl. I am from Seattle, Washington and currently live in San Francisco. 
        </p>
      </div>
    </aside>
  </section>
  <section className="main-block">
    <div className="title-side">
      <h2 id="work-page">Work</h2>
    </div>
    <div className="content-side">
      <div className="pic-card" id="first-pic">
        <a href="https://cpysden-coder.github.io/wk4-project-html/"> <img id="imgone" src="https://frostbrowntodd.com/app/uploads/2020/04/Business-Analytics-600x350.jpg" alt="cloud business graphics" />
        </a>
        <div className="label">
          <h3>Portfolio Project One</h3>
          <span>Brthday</span>
        </div>
      </div>
      <div className="pic-card">
        <a href="https://chrisnirschl1.github.io/day-planner/"> <img src="https://image.shutterstock.com/image-photo/success-businessman-business-growing-graph-260nw-1716365698.jpg" alt="Bar chart going up" />
        </a>
        <div className="label">
          <h3>Day Planner</h3>
          <span>HTML/CSS/Jquery</span>
        </div>
      </div>
      <div className="pic-card">
        <a href="https://chrisnirschl1.github.io/password-gen/"> <img src="https://thumbs.dreamstime.com/z/business-man-concepts-representing-growth-success-innovation-vision-creativity-rising-arrows-31477040.jpg" alt="Business buzzwords" />
        </a>
        <div className="label">
          <h3>Password Generator</h3>
          <span>HTML/CSS/JavaScript</span>
        </div>
      </div>
      <div id="weatherpicture" className="pic-card">
        <div className="label">
          <h3>Weather App</h3>
          <span>HTML/CSS/JQuery/APIs</span>
          <a href="https://chrisnirschl1.github.io/weather-app/">  <button>Launch</button></a>
        </div>
      </div>
      <div className="pic-card">
        <a href="https://mental-health-tracker-dbt.herokuapp.com/"> <img src="https://strategylab.ca/wp-content/uploads/2016/01/Stock-Photos-are-the-worst.jpg" alt="Business team meeting" />
        </a>
        <div className="label">
          <h3>Mental Health Project</h3>
          <span>JavaScript/Express/MySQL/Handlebars</span>
        </div>
      </div>
    </div>
  </section>
  <section className="main-block">
    <h3 className="title-side">Contact Me</h3>
    <div id="contact-link" className="content-side">
      <a href={4254789573}>425-578-9573</a>
      <a href="mailto:christiannirschl6@gmail.com">christiannirschl6@gmail.com</a>
      <a href="https://github.com/ChrisNirschl1">GitHub</a>
      <a href="https://www.linkedin.com/in/christian-nirschl/">LinkedIn</a>
    </div>
  </section>
</div>

    </div>
  );
}

export default App;
