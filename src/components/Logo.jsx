import Logo from "../imgs/logo.svg";
import LogoName from "../imgs/logo-text.svg";

export const LogoItem = () => {
  return (
    <div className="logo">
      <img src={Logo} alt="logo" />
      <img src={LogoName} alt="logo" />
    </div>
  );
};
