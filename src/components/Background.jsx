import Arrow from "../imgs/arrow.svg";

export function Background() {
  return (
    <main>
      <h1 className="title">Building things is our mission.</h1>
      <div className="future-pj">
        <h4>Feature Projects</h4>
        <p>The National University of Architecture</p>
        <div className="arrows">
          <span>
            <img src={Arrow} alt="arrow" />
            Back
          </span>
          <span>
            Next
            <img src={Arrow} alt="arrow" />
          </span>
        </div>
      </div>
    </main>
  );
}
