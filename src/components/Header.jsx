import { useState, useEffect } from "react";
import { Fade, Fade as Hamburger } from "hamburger-react";
import { LogoItem } from "./Logo";

export function Header() {
  const [isSmall, setIsSmall] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const setHeader = () => {
      window.innerWidth <= 680 ? setIsSmall(true) : setIsSmall(false);
    };
    window.addEventListener("resize", setHeader);
    setHeader();
    return () => window.removeEventListener("resize", setHeader);
  }, []);

  const mobileNav = (
    <ul className="mobile-nav" style={{ right: isActive ? "0" : "-450px" }}>
      <li>Home</li>
      <li>About Us</li>
      <li>Projects</li>
      <li>Services</li>
      <li>Contact Us</li>
    </ul>
  );

  const HeaderContent = () => {
    if (isSmall) {
      return (
        <Fade
          rounded
          onToggle={(toggled) => {
            if (toggled) {
              setIsActive(!isActive);
            }
          }}
        />
      );
    } else {
      return (
        <ul className="nav">
          <li>Home</li>
          <li>About Us</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      );
    }
  };

  return (
    <>
      {isSmall && mobileNav}
      <header>
        <div className="container">
          <LogoItem />
          <HeaderContent />
        </div>
      </header>
    </>
  );
}
