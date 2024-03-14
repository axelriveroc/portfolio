import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/aviso_legal">Aviso Legal</Link>
        </li>
        <li>
          <Link to="/privacy_policy">Política de Privacidad</Link>
        </li>
      </ul>
      <h5 style={{ color: "white" }}>
        Esta web es propiedad privada de Axel Rivero
      </h5>
    </div>
  );
};

export default Footer;
