import { Link } from "react-router-dom";
import st from "./Navbar.module.css";
import ButtonBuilt from "../ButtonBuilt/Button";

export default function Navbar(): JSX.Element {
  return (
    <main className={st.main}>
      
      <div className={st.buttonBuilt}>
        <Link to="/">
          <ButtonBuilt t="Home" />
        </Link>
      </div>

      <div className={st.buttonBuilt}>
        <Link to="/gallery">
          <ButtonBuilt t="Gallery" />
        </Link>
      </div>

      <div className={st.buttonBuilt}>
        <a href="https://www.instagram.com/capuzz.art/" target="_blank">
          <ButtonBuilt t="Instagram" />
        </a>
      </div>
    </main>
  );
}
