const Projects = () => {
  return (
    <section className="section-projects">
      <h2 className="heading-primary">Projects</h2>

      <picture className="project-img">
        <source srcSet="./Blog-img.webp" type="image/webp" />
        <source srcSet="./Blog-img.png" type="image/png" />
        <img src="./Blog-img.webp" alt="Blog project" className="project-img" />
      </picture>

      <div className="text-box">
        <h3 className="heading-tertiary">Blog</h3>
        <p className="aboutme-text project-text">
          The blog application with custom blog uploads.
        </p>
        <a
          className="about-cta"
          href="https://blog-maja.netlify.app/"
          target="_blank"
        >
          View project&nbsp;&nbsp;➔
        </a>
      </div>

      <div className="text-box">
        <h3 className="heading-tertiary">Meme Generator</h3>
        <p className="aboutme-text project-text">
          The responsive Meme Generator. The application generates a new Meme
          simply by clicking the button. Also, custom text could be displayed on
          the top and the bottom of each meme.
        </p>
        <a
          className="about-cta"
          href="https://memegenerator-maja.netlify.app/"
          target="_blank"
        >
          View project&nbsp;&nbsp;➔
        </a>
      </div>

      <picture className="project-img">
        <source srcSet="./Meme-generator.webp" type="image/webp" />
        <source srcSet="./Meme-generator.png" type="image/png" />
        <img
          src="./Meme-generator.png"
          alt="Meme Generator project"
          className="project-img"
        />
      </picture>

      <picture className="project-img">
        <source srcSet="./Forkify-img.webp" type="image/webp" />
        <source srcSet="./Forkify-img.png" type="image/png" />
        <img
          src="./Forkify-img.png"
          alt="Forkify project"
          className="project-img"
        />
      </picture>

      <div className="text-box">
        <h3 className="heading-tertiary">Forkify</h3>
        <p className="aboutme-text project-text">
          The recipe application with custom recipe uploads.
        </p>
        <a
          className="about-cta"
          href="https://forkify-maja.netlify.app"
          target="_blank"
        >
          View project&nbsp;&nbsp;➔
        </a>
      </div>

      <div className="text-box">
        <h3 className="heading-tertiary">Omnifood</h3>
        <p className="aboutme-text project-text">
          The responsive website template for creating a custom, well-being and
          individual weekly meal plan.
        </p>
        <a
          className="about-cta"
          href="https://omnifood-maja.netlify.app/"
          target="_blank"
        >
          View project&nbsp;&nbsp;➔
        </a>
      </div>
      <picture className="project-img">
        <source srcSet="./Omnifood-img.webp" type="image/webp" />
        <source srcSet="./Omnifood-img.png" type="image/png" />
        <img
          src="./Omnifood-img.png"
          alt="Omnifood project"
          className="project-img"
        />
      </picture>

      <a
        className="about-cta projects-view"
        href="https://github.com/maja4s91"
        target="_blank"
      >
        View all projects&nbsp;&nbsp;➔
      </a>
    </section>
  );
};

export default Projects;
