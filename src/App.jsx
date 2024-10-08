import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import my_image from "./assets/c6c69bfa-de39-489c-8553-3c018d428a25-removebg-preview.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid main-cont ">
      {" "}
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col text-center head">
                <div className="my-5">
                  <div>
                    <h2>Hey there! I'm</h2>
                    <h1>Johnson Omwoyo</h1>
                    <h2>Software Developer</h2>
                  </div>
                  <div>
                    <button className=" btn  my-2 my-md-4 py-3 px-4 connect mx-2 ">
                      view Resume
                    </button>
                    <button className=" btn my-2 my-md-4 py-3 px-4 connect mx-2">
                      Let's Connect
                    </button>
                  </div>
                </div>
                <div>
                  <h1 id="get">Get To Know</h1>
                  <h4 className="titles" id="home">
                    About Me
                  </h4>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-1"></div>
              <div className="col">
                <div className="container">
                  <div className="row  d-flex align-items-center justify-content-center rounded  carded">
                    <div className=" col-12 col-md-5 py-3 ">
                      <img
                        className="img-fluid rounded-pill"
                        src="src/assets/c6c69bfa-de39-489c-8553-3c018d428a25-removebg-preview-removebg-preview.png"
                        alt=""
                      />
                    </div>
                    <div className="col about-me my-5 display">
                      <p className="about-me">
                        I am a Full Stack Software Developer.
                      </p>
                      <p className="about-me">
                        I gain satisfaction from engaging in continuous learning
                        and personal growth as a software developer. I find joy
                        in being able to create projects, while exploring the
                        limits of my capabilities and pushing the boundaries of
                        what is achievable through the application of my
                        technical skills.
                      </p>
                      <p className="about-me">
                        Apart from programming, I enjoy music(making and
                        litsening)!
                      </p>
                      <div className="text-center">
                        <button className="btn lets-connect my-2 my-md-4 py-3 px-4 ">
                          {" "}
                          Let's Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row">
              <div className="col text-center my-5 ">
                <div>
                  <h1 id="get">My Recent Work</h1>
                  <h4 id="projects" className="titles">
                    Featured Projects
                  </h4>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col text-center my-5">
                <div>
                  <h1 id="get">Technical Skills</h1>
                  <h4 className="titles" id="">
                    Language,Frameworks & Tools
                  </h4>
                </div>
                <div className="container rounded carded p-3">
                  <div className="row d-flex justify-content-left">
                    <div className="col mx-2 d-flex align-items-center  p-3 technologies ">
                      <i className="mx-1 fa-brands fa-js"></i> Javascript
                    </div>
                    <div className="col mx-2 d-flex align-items-center  p-3 technologies ">
                      <i className="mx-1 fa-brands fa-python"></i> Python
                    </div>
                    <div className="col mx-2 d-flex align-items-center  p-3 technologies ">
                      <i className="mx-1 fa-brands fa-react"></i> React.js
                    </div>
                    <div className="col mx-2 d-flex align-items-center  p-3 technologies ">
                      <i className="mx-1 fa-solid fa-flask"></i> Flask
                    </div>
                    <div className="col mx-2 d-flex align-items-center  p-3 technologies ">
                      <i className="mx-1 fa-solid fa-database"></i> SQL
                    </div>
                    <div className="col mx-2 d-flex align-items-center  p-3 technologies ">
                      <i className="mx-1 fa-brands fa-html5"></i> HTML
                    </div>
                    <div className="col mx-2 d-flex align-items-center  p-3 technologies ">
                      <i className="mx-1 fa-brands fa-css3-alt"></i> CSS
                    </div>
                    <div className="col mx-2 d-flex align-items-center  p-3 technologies ">
                      <i className="mx-1 fa-brands fa-git"></i> Git
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col text-center my-5">
                <div>
                  <h1 id="get">Let's' connect</h1>
                  <h4 className="titles" id="">
                    contact me
                  </h4>
                </div>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-5 mx-2 text-center carded py-3 my-3 rounded">
                      <i className=" icon fa-regular fa-envelope"></i>
                      <h5 className="email">Email</h5>
                      <p className="my-email">johnsonomwoyo100@gmail.com</p>
                      <button className="btn lets-connect my-2 my-md-4 py-3 px-4 ">
                        {" "}
                        Send a message
                      </button>{" "}
                    </div>
                    <div className="col-12 col-md-5  mx-2 text-center carded py-3 my-3 rounded">
                      <i className="fa-brands fa-linkedin"></i>
                      <h5 className="email">Linkedin</h5>
                      <p className="my-email">Johnson Omwoyo</p>
                      <button className="btn lets-connect my-2 my-md-4 py-3 px-4 ">
                        {" "}
                        View Profile
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4"></div>
              <div className="col-12  text-center ">
                <h2>Johnson Omwoyo</h2>
                <ul className="links d-flex justify-content-between">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#home">about</a>
                  </li>
                  <li>
                    <a href="#home">Portfolio</a>
                  </li>
                  <li>
                    <a href="#home">Skills</a>
                  </li>
                  <li>
                    <a href="#home">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//                  Rigathi is really emoshonol
//                  Doing what we expectd tommorrow
