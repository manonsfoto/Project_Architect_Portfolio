import "./Projects.css";
import imgProject1 from "/public/img/project1.png";
import imgProject2 from "/public/img/project2.png";
import imgProject3 from "/public/img/project3.png";
import imgProject4 from "/public/img/project4.png";
import imgProject5 from "/public/img/project5.png";
const Projects = () => {
  return (
    <section className="stn-projects flex">
      <h1>Our Projects</h1>
      <div className="photo-wrapper flex">
        <div className="photo-card">
          <img src={imgProject1} alt="buliding" />
        </div>
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
      <button type="button" className="dark">
        all projects →
      </button>
    </section>
  );
};

export default Projects;
