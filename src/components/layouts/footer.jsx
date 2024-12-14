import { Register } from "../forms/register";
import { Icons } from "../icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-details">
        <h3 className="footer-title">
          JOIN OUR KICKSPLUS <br />
          CLUB & GET 15% OFF
        </h3>
        <p className="footer-description">
          Sign Up for free! join the community
        </p>
        <Register />
      </div>
      <div className="footer-logo">
        <Icons.logo className="h-72 w-96 fill-white" />
      </div>
    </footer>
  );
};
