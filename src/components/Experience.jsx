import illus1 from "../imgs/illus-1.svg";
import illus2 from "../imgs/illus-2.svg";
import illus3 from "../imgs/illus-3.svg";
import illus4 from "../imgs/illus-4.svg";

export function Experience() {
  return (
    <div className="experience">
      <div className="cards">
        <div className="card">
          <div className="title">
            <div className="num">84</div>
            <p>Happy Clients</p>
          </div>
          <img src={illus4} alt="" />
        </div>
        <div className="card">
          <div className="title">
            <div className="num">123</div>
            <p>Projects Completed</p>
          </div>
          <img src={illus3} alt="" />
        </div>
        <div className="card">
          <div className="title">
            <div className="num">37</div>
            <p>Awards Win</p>
          </div>
          <img src={illus1} alt="" />
        </div>
        <div className="card">
          <div className="title">
            <div className="num">30</div>
            <p>Years in Business</p>
          </div>
          <img src={illus2} alt="" />
        </div>
      </div>
      <div className="about">
        <h1>30 Years Experience</h1>
        <p>
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
}
