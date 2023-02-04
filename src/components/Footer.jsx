import { LogoItem } from "./Logo";
import Facebook from "../imgs/facebook.svg";
import LinkedIn from "../imgs/linkedin.svg";
import Twitter from "../imgs/twitter.svg";

export function Footer() {
  return (
    <footer>
      <div className="contact-info">
        <p>
          <span>addreess:</span>6391 Elgin St. Celina, Delaware 10299
        </p>
        <p>
          <span>phone:</span>+84 1102 2703
        </p>
        <p>
          <span>email:</span>hello@thebox.com
        </p>
        <LogoItem />
      </div>
      <div className="contact-links">
        <p>newsletter:</p>
        <span>
          <input type="email" placeholder="Your email here" />
          <button>Subscribe</button>
        </span>
        <p className="socails">socail:</p>
        <span>
          <span>
            <img src={Facebook} alt="img" />
          </span>
          <span>
            <img src={LinkedIn} alt="img" />
          </span>
          <span>
            <img src={Twitter} alt="img" />
          </span>
        </span>
      </div>
    </footer>
  );
}
