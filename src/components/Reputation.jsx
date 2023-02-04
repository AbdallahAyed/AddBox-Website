import Services from "../imgs/vector-3.svg";
import Designs from "../imgs/vector-2.svg";

const Box = ({ imgSrc, title, decription }) => {
  return (
    <div className="box">
      <img src={imgSrc} alt="img" />
      <h3>Best {title}</h3>
      <p>{decription}</p>
    </div>
  );
};

export function Reputation() {
  return (
    <section className="reputation">
      <h1>Reputation</h1>
      <div className="reputation__content">
        <Box
          imgSrc={Services}
          title="Services"
          decription="Nullam senectus porttitor in eget. Eget rutrum leo interdum."
        />
        <Box
          imgSrc={Services}
          title="Teams"
          decription="Cursus semper tellus volutpat aliquet lacus."
        />
        <Box
          imgSrc={Designs}
          title="Designs"
          decription="Ultricies at ipsum nunc, tristique nam lectus."
        />
      </div>
    </section>
  );
}
