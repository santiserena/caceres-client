import frontImage from "../../media/Cueva.jpg"

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>Home</h1>
      <img src={frontImage} width="100%" alt="image not found" />
      <h2>Latest works</h2>
      <h2>About Emiliano and picture</h2>
      <footer>Footer</footer>
    </div>
  );
}
