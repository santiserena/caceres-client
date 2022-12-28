import { Link } from "react-router-dom"

export default function Navbar(): JSX.Element {
  return (
    <div>

      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/gallery">
        <button>Gallery</button>
      </Link>

      <a href="https://www.instagram.com/capuzz.art/" target="_blank">
        <button>Instagram</button>
      </a>

    </div>
  );
}
