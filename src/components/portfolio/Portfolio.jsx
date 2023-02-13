import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Criptocorency Dashboard",
      github: "https://github.com",
      demo: "http://dribbble.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "charts Dashboard",
      github: "https://github.com",
      demo: "http://dribbble.com",
    },
    {
      id: 3,
      image: IMG3,
      title: "Figma Dashboard",
      github: "https://github.com",
      demo: "http://dribbble.com",
    },
    {
      id: 4,
      image: IMG4,
      title: "Criptocorency Dashboard",
      github: "https://github.com",
      demo: "http://dribbble.com",
    },
    {
      id: 5,
      image: IMG5,
      title: "Criptocorency Dashboard",
      github: "https://github.com",
      demo: "http://dribbble.com",
    },
    {
      id: 6,
      image: IMG6,
      title: "Criptocorency Dashboard",
      github: "https://github.com",
      demo: "http://dribbble.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="portfolio" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
