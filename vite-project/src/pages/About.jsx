import data from "../data";
import AboutIcons from "../components/AboutIcons";
import DownloadCv from "../components/DownloadCv";

const About = () => {
  return (
    <section className="section-about">
      <h2 className="heading-primary">About</h2>
      <picture className="about-img">
        <source srcSet="./imgs/Maja-About.webp" type="image/webp" />
        <source srcSet="./imgs/Maja-About.png" type="image/png" />
        <img
          src="./imgs/Maja-About.png"
          alt="Maja's image"
          className="about-img"
        />
      </picture>

      <div className="about-text">
        <div className="text-icon">
          <p className="aboutme-text ">{data.about}</p>
          <AboutIcons />
        </div>
        <DownloadCv className={"about-cta"} />
      </div>
    </section>
  );
};

export default About;
