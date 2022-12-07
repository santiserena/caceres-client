import { Link } from "react-router-dom"

export default function Navbar(): JSX.Element {
  return (
    <div>
      <Link to="/"><button>Home</button></Link>
      <Link to="/gallery"><button>Gallery</button></Link>
      <button>Contact</button>
      <button>About</button>
    </div>
  );
}
