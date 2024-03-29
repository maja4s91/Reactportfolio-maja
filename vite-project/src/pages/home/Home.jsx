import { Link } from "react-router-dom";
import data from "../../data";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnimatedBackground from "../../components/AnimatedBackground";
import "./home.css";

const Home = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint = 958;

  // useEffect(() => {
  //   const handleResizeWindow = () => setWidth(window.innerWidth);

  //   window.addEventListener("resize", handleResizeWindow);
  //   return () => {
  //     window.removeEventListener("resize", handleResizeWindow);
  //   };
  // }, []);

  return (
    <motion.section
      className="section-home"
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 1 }}
    >
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
        <source srcSet="./imgs/Maja-Home.webp" type="image/webp" />
        <source srcSet="./imgs/Maja-Home.png" type="image/png" />
        <img
          className="home-img"
          src="./imgs/Maja-Home.png"
          alt="Maja's profile"
        />
      </picture>

      {/* {width >= breakpoint ? <AnimatedBackground /> : <></>} */}
      <AnimatedBackground />
    </motion.section>
  );
};

export default Home;
