import "./Footer.css";
import footerLogo from "../../assets/footerLogo.svg";
const Footer = () => {
  return (
    <footer className="flex footer">
      <img src={footerLogo} alt="logo" className="footer-logo" />
      <div className="info flex">
        <p>Information</p>
        <p>Main</p>
        <p>Gallery</p>
        <p>Projects</p>
        <p>Certifications</p>
        <p>Contacts</p>
      </div>
      <div className="contacts flex">
        <p>Contacts</p>
        <p>
          1234 Sample Street
          <br />
          Austin Texas 78704
        </p>
        <p>512.333.2222</p>
        <p>sampleemail@gmail.com</p>
      </div>
      <div className="social-icons flex">
        <p>Social Media</p>
        <p>Facebook Twitter/X Linkedin Pinterest</p>
      </div>
    </footer>
  );
};

export default Footer;
