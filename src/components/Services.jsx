import Icon1 from "../imgs/vector-4.svg";
import Icon2 from "../imgs/vector-5.svg";
import Icon3 from "../imgs/vector-6.svg";
import Icon4 from "../imgs/vector-7.svg";
import Icon5 from "../imgs/vector-8.svg";
import Icon6 from "../imgs/vector-9.svg";

const Service = ({ icon, title }) => {
  return (
    <div className="box">
      <img src={icon} alt="img" />
      <div className="square"></div>
      <h4>{title}</h4>
    </div>
  );
};

export function Services() {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="boxes">
        <Service icon={Icon5} title="Construction" />
        <Service icon={Icon6} title="Renovation" />
        <Service icon={Icon2} title="Consultation" />
        <Service icon={Icon1} title="Repair Services" />
        <Service icon={Icon3} title="Architecture" />
        <Service icon={Icon4} title="Electric" />
      </div>
    </div>
  );
}
