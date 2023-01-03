import { Link } from "react-router-dom";
import st from "./Navbar.module.css";
import ButtonBuilt from "../ButtonBuilt/Button";

export default function Navbar(): JSX.Element {
  return (
    <div>
      <br/>
      <Link to="/">
        <ButtonBuilt t="Home"/>
      </Link>

      <Link to="/gallery">
        <ButtonBuilt t="Gallery"/>
      </Link>

      <a href="https://www.instagram.com/capuzz.art/" target="_blank">
        <ButtonBuilt t="Instagram"/>
      </a>

    </div>
  );
}
