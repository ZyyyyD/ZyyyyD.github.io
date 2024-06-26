import "./App.css";
import { Link } from "react-router-dom";

const logo = {
  height: { height: "50px" },
  styles: { borderRight: "1px solid black" },
  img: { width: "20em" },
  resume: {
    textDecoration: "none",
    padding: "30px",
    backgroundColor: "#F7DEA9",
  },
  project: {
    textDecoration: "none",
    padding: "30px",
    backgroundColor: "#B52D43",
  },
  about: {
    textDecoration: "none",
    padding: "30px",
    backgroundColor: "#7CE8DA",
  },
};

function App() {
  return (
    <div className="App">
      <div className="home">
        <nav className="navbar navbar-expand-lg static-top p-5">
          <Link className="navbar-brand" to="/">
            <img src="logo-no-background.png" alt="logo" style={logo.height} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item px-2" style={logo.styles}>
                <Link
                  className="nav-link text-white active"
                  to="./nav/project.js"
                  aria-current="page">
                  Project
                </Link>
              </li>
              <li className="nav-item px-2" style={logo.styles}>
                <Link className="nav-link text-white" to="resume.html">
                  Resume
                </Link>
              </li>
              <li className="nav-item px-2" style={logo.styles}>
                <Link className="nav-link text-white" to="about.html">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container h-100">
          <div className="row my-5">
            <div className="col-md-6 ">
              <div className=" d-flex justify-content-center align-items-center my-3">
                <img style={logo.img} src="logo-no-background.png" alt="main" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-evenly align-items-center">
              <div className="d-flex justify-content-evenlyS flex-column py-3">
                <div className="d-flex justify-content-evenly align-items-center">
                  <a
                    className="rounded-circle fw"
                    style={logo.resume}
                    href="./_Frias, Zyrel James CV (1).pdf"
                    download="_Frias, Zyrel James CV (1).pdf">
                    Resume
                  </a>
                  <a
                    className="rounded-circle fw"
                    style={logo.project}
                    href="project.html">
                    Project
                  </a>
                  <a
                    className="rounded-circle fw"
                    style={logo.about}
                    href="about.html">
                    About
                  </a>
                </div>
                <h3 className="display-3">Zyrel James</h3>
                <h6 className="display-6">Front End Web Developer</h6>
              </div>
            </div>
          </div>

          <footer className="">
            <div className="row">
              <div className="d-flex justify-content-around ">
                <div className="col-md-4 col-sm-4">
                  <h6 className="text-center">Phone</h6>
                  <p>01234124</p>
                </div>
                <div className="col-md-4 col-sm-4">
                  <h6 className="text-center">Email</h6>
                  <p>asdfas@</p>
                </div>
                <div className="col-md-4 col-sm-4">
                  <h6 className="text-center">Social Media</h6>
                  <p href="">F</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
