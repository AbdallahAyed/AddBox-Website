import Image1 from "../imgs/img-1.png";
import Image2 from "../imgs/img-2.png";
import Image3 from "../imgs/img-3.png";
import Image4 from "../imgs/img-4.png";
import Arrow from "../imgs/arrow.svg";

const projects = [
  {
    img: Image1,
    title: "Wildstone Infra Hotel",
    description: "2715 Ash Dr. San Jose, South Dakota",
    index: 1,
  },
  {
    img: Image2,
    title: "Wi2sh Stone Building",
    description: "2972 Westheimer Rd. Santa Ana, Illinois",
    index: 2,
  },
  {
    img: Image3,
    title: "Mr. Parkinston’s House",
    description: "3517 W. Gray St. Utica, Pennsylvania",
    index: 3,
  },
  {
    img: Image4,
    title: "Oregano Height",
    description: "2464 Royal Ln. Mesa, New Jersey",
    index: 4,
  },
];
export function Projects() {
  return (
    <div className="projects">
      <div className="sidebar">
        <h4>Projects</h4>
        <div className="sections">
          <p>All</p>
          <p>Commercial</p>
          <p>Residentail</p>
          <p>Other</p>
        </div>
      </div>
      <div className="projects-container">
        {projects.map(({ img, title, description, index }) => {
          return (
            <div className="project" key={index}>
              <figure>
                <img src={img} alt={title} />
                <figcaption>
                  <div className="project-info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </figcaption>
              </figure>
            </div>
          );
        })}
        <div className="slider">
          <button className="back">
            <img src={Arrow} alt="arrow" />
            Back
          </button>
          <div className="ball active"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <button>
            Next
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
