import {
  codeOutline,
  chatbubblesOutline,
  shareSocialOutline,
  cameraOutline,
  logoLinkedin,
  logoGithub,
  logoSkype,
  // logoReact,
  // logoHtml5,
  // logoCss3,
  // logoJavascript,
  // logoWordpress,
  // logoFigma,
  // logoElectron,
  eyeOutline,
} from "ionicons/icons";

const data = {
  hello: "Hello,",
  name: "I'm Maja Djordjevic",
  position: "Junior Web Developer",
  about:
    " I’m a Junior Web Developer, and currently employed at the IT company 'Ogitive' as a Frontend Web Developer. My primary responsibilities involve collaborating on the development of Responsive Websites and engaging in direct communication with clients to fulfill their project requirements (converting Figma design into Responsive Websites, using HTML, CSS, JavaScript and WordPress). I'm skilled in React, Redux, WordPress, JavaScript, HTML, CSS, Bootstrap, GitHub and npm. So far, I’ve developed several projects on my own, and it has been more than a thrilling journey for me. I'm passionate about Web Development, highly organized and possess excellent communication skills.",
  dataAboutIcons: [
    {
      id: 5,
      icon: codeOutline,
      title: "Code",
      text: "Love coding and learning",
    },
    {
      id: 6,
      icon: chatbubblesOutline,
      title: "Teamwork",
      text: "Love working in teams",
    },
    {
      id: 7,
      icon: shareSocialOutline,
      title: "Share",
      text: "Love sharing my knowladge",
    },
    {
      id: 8,
      icon: cameraOutline,
      title: "Photos",
      text: "Love taking photos",
    },
  ],
  dataSocialIcons: [
    {
      id: 2,
      icon: logoLinkedin,
      link: "https://www.linkedin.com/in/maja-17129-a24610176",
      title: "Linkedin",
    },
    {
      id: 3,
      icon: logoGithub,
      link: "https://github.com/maja4s91",
      title: "GitHub",
    },
    {
      id: 4,
      icon: logoSkype,
      link: "https://join.skype.com/invite/EYCs3HXvOxL9",
      title: "Skype",
    },
  ],
  dataSkills: [
    {
      id: 9,
      icon: "react.png",
      title: "React",
    },
    {
      id: 10,
      icon: "javascript.png",
      title: "JavaScript",
    },
    {
      id: 11,
      icon: "html.png",
      title: "HTML",
    },
    {
      id: 12,
      icon: "css3.png",
      title: "CSS",
    },
    {
      id: 13,
      // icon: logoCss3,

      icon: "wordpress.png",
      title: "WordPress",
    },

    {
      id: 14,
      icon: "github.png",
      title: "GitHub",
    },
    {
      id: 15,
      icon: "figma.png",
      title: "Figma",
    },
    {
      id: 16,
      icon: "redux.png",
      title: "Redux",
    },
  ],
  dataProjects: [
    {
      id: 17,
      sourceWebP: "../imgs/React-img.webp",
      sourcePng: "../imgs/React-img.png",
      title: "React shop",
      text: "The responsive e-commerce application.",
      icon: eyeOutline,
      link: "https://master--reactshop-maja.netlify.app/",
      titleIcon: "View",
    },
    {
      id: 18,
      sourceWebP: "../imgs/Oneday-img.webp",
      sourcePng: "../imgs/Oneday-img.png",
      title: "One day charter",
      text: "The sailing charter application.",
      icon: eyeOutline,
      link: "https://onedaycharter.me/catamaran-rental/",
      titleIcon: "View",
    },

    {
      id: 19,
      sourceWebP: "../imgs/Omnifood-img.webp",
      sourcePng: "../imgs/Omnifood-img.png",
      title: "Omnifood",
      text: "The responsive website for creating a custom meal plan.",
      icon: eyeOutline,
      link: "https://omnifood-maja.netlify.app/",
      titleIcon: "View",
    },
    {
      id: 20,
      sourceWebP: "../imgs/Forkify-img.webp",
      sourcePng: "../imgs/Forkify-img.png",
      title: "Forkify",
      text: "The recipe application with custom recipe uploads.",
      icon: eyeOutline,
      link: "https://forkify-maja.netlify.app/",
      titleIcon: "View",
    },
  ],
};

export default data;
