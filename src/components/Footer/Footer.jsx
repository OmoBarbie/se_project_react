import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__author">Developed by Omotayo Oluwole</p>
      <p className="footer__year">{year}</p>
    </footer>
  );
};

export default Footer;
