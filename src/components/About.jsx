import AboutImg from "../imgs/about.png";

export function About() {
  return (
    <div className="about">
      <img src={AboutImg} alt="" />
      <div className="about__about-us">
        <h1>About Us</h1>
        <p>
          For more than 30 years we have been delivering world-class
          construction and we’ve built many lasting relationships along the way.
        </p>
        <p>
          We’ve matured into an industry leader and trusted resource for those
          seeking quality, innovation and reliability when building in the U.S.
        </p>
        <button>More on Our History</button>
      </div>
    </div>
  );
}
