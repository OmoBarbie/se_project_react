import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__author">Omotayo Oluwole</p>
      <p className="footer__year">{2026}</p>
    </footer>
  );
}

export default Footer;
