import { socialLinks } from "./data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      <SocialLinks parentClass="footer-icons" itemClass="footer-icon" />

      <p className="copyright">
        copyright &copy; Chez Nous on Se Régale
        <br />
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;