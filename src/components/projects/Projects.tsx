import "./Projects.css";

import imgProject2 from "/public/img/project2.png";
import imgProject3 from "/public/img/project3.png";
import imgProject4 from "/public/img/project4.png";
import imgProject5 from "/public/img/project5.png";
const Projects = () => {
  return (
    <section className="stn-projects flex side-padding">
      <h1>Our Projects</h1>
      <div className="photo-wrapper flex">
        <a href="#">
          <div className="photo-card photo-card1">
            <h1>
              Sample
              <br />
              Project
            </h1>
            <p>view more →</p>
          </div>
        </a>
        <div className="photo-card">
          <img src={imgProject2} alt="buliding" />
        </div>
        <div className="photo-card">
          <img src={imgProject3} alt="buliding" />
        </div>
        <div className="photo-card">
          <img src={imgProject4} alt="buliding" />
        </div>
        <div className="photo-card">
          <img src={imgProject5} alt="buliding" />
        </div>
      </div>
      <button type="button" className="light-mode">
        all projects →
      </button>
    </section>
  );
};

export default Projects;
