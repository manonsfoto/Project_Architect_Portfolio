import "./Hero.css";
import imgHero from "/public/img/hero.png";
const Hero = () => {
  return (
    <section className="stn-hero flex">
      <h1>
        PROJECT
        <br />
        <span>Lorum</span>
      </h1>
      <div className="img-box">
        {" "}
        <img src={imgHero} alt="building" />
        <button className="btn-hero" type="button">
          view project →
        </button>
      </div>
    </section>
  );
};

export default Hero;
