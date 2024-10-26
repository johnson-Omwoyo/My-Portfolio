import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import my_image from "../src/assets/c6c69bfa-de39-489c-8553-3c018d428a25-removebg-preview-removebg-preview.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Carousel } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  const Projects = [
    {
      description: "This is the best service I've ever used!",
      name: "Roots and realms",
      link: "https://roots-and-reals-frontend.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      description: "Amazing experience, highly recommend!",
      name: "Syneffa clone",
      link: "https://syneffa-clone.vercel.app/",
      image:
        "https://cdn.prod.website-files.com/62720565a7b402ef161555a0/659719f5f96ac2728edfa6f2_Synnefa%20Smart%20Farmer-p-800.jpeg",
    },
    {
      description: "I can't imagine my life without it!",
      name: "Mingle Sphere",
      link: "https://mingle-sphere-frontend.vercel.app/",
      image:
        "https://bcec.com.au/wp-content/uploads/School-formals-V2-840x458-1.jpg",
    },
  ];

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
              {/* <div className="col-12 col-md-1 "></div> */}
              <div className="col-12">
                <div className="container">
                  <div className="row  d-flex align-items-center justify-content-center rounded  carded">
                    <div className=" col-12 col-md-5 py-3  ">
                      <img
                        className="img-fluid rounded-pill"
                        src={my_image}
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
              {/* <div className="col-12  col-md-1"></div> */}
            </div>
            <div className="row">
              <div className="col-12 text-center my-5 ">
                <div>
                  <h1 id="get">My Recent Work</h1>
                  <h4 id="projects" className="titles">
                    Featured Projects
                  </h4>
                </div>
              </div>
              <div className="col-12 ">
                <Carousel className="main-cont carded rounded">
                  {Projects.map((project, index) => (
                    <Carousel.Item key={index}>
                      <div className="d-flex justify-content-center ">
                        <div className="col-12 col-md-8 my-4">
                          <div className="card text-center rounded carded shadow-lg">
                            <img
                              className="card-img-top img-fluid rounded-top"
                              src={project.image}
                              alt={project.name}
                              style={{ height: "300px", objectFit: "cover" }} // Ensures images are consistently sized
                            />
                            <div className="card-body">
                              <h2 className="card-title head h2">
                                {project.name}
                              </h2>
                              <p className="about-me">{project.description}</p>
                              <div className="text-center">
                                <button
                                  onClick={() =>
                                    window.open(project.link, "_blank")
                                  }
                                  className="btn lets-connect py-2 px-4"
                                >
                                  View Project
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
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
