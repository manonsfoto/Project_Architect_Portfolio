import "./About.css";
import imgAbout1 from "/public/img/about1.png";
import imgAbout2 from "/public/img/about2.png";
import imgAbout3 from "/public/img/about3.png";

const About = () => {
  return (
    <section className=" flex stn-about ">
      <div className="flex imgbox-big">
        <div className="flex imgbox-small">
          <img src={imgAbout1} alt="building" />
          <img src={imgAbout3} alt="building" />
        </div>
        <img src={imgAbout2} alt="building" />
      </div>
      <article>
        <h1>About</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button type="button">read more →</button>
      </article>
    </section>
  );
};

export default About;
