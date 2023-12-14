import data from "./data";
import AboutIcons from "./AboutIcons";

const About = () => {
  return (
    <section className="section-about">
      <h2 className="heading-primary">About</h2>
      <picture className="about-img">
        <source srcSet="./Maja-About.webp" type="image/webp" />
        <source srcSet="./Maja-About.png" type="image/png" />
        <img src="./Maja-About.png" alt="Maja's image" className="about-img" />
      </picture>

      <div className="about-text">
        <div className="text-icon">
          <p className="aboutme-text ">{data.about}</p>
          <AboutIcons />
        </div>
        <a className="about-cta" href="./Maja's CV.pdf" download="Maja's CV">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
