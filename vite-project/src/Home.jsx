import { Link } from "react-router-dom";
import data from "./data";
import SocialMediaIcons from "./SocialMediaIcons";

const Home = () => {
  return (
    <section className="section-home">
      <div className="home-text">
        <div>
          <p className="hello">{data.hello}</p>
          <p className="intro">{data.name}</p>
          <p className="position">{data.position}</p>
        </div>
        <SocialMediaIcons />
        <Link to="/about" className="about-me">
          About me&nbsp;🠗
        </Link>
      </div>
      <picture className="home-img">
        <source srcSet="./Maja-Home.webp" type="image/webp" />
        <source srcSet="./Maja-Home.png" type="image/png" />
        <img className="home-img" src="./Maja-Home.png" alt="Maja's profile" />
      </picture>
    </section>
  );
};

export default Home;
