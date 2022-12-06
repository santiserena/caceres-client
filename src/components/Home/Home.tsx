import frontImage from "../../media/Cueva.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home(): JSX.Element {

const [pictures, setPictures] = useState ([]);  /* ver si algo de ts */  
useEffect( () =>{
  axios
  .get('http://localhost:3000/all-drawings')
  .then(result=>setPictures(result.data))
},[])

console.log(pictures);

  return (
    <div>
      <h1>Home</h1>
      <img src={frontImage} width="100%" alt="image not found" />
      <h2>Latest works</h2>
      <h2>About Emiliano and picture</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse,
        delectus ullam ducimus sequi maiores maxime dicta culpa. Sed culpa
        ipsam, vitae facere vel voluptatem quasi rem accusamus autem aliquid!
      </p>
      <footer>Footer</footer>

      {pictures.map((e: any) => (
        <div key={e._id}>
          <p>{e.name}</p>
          <p>{e._id}</p>
          <img src={e.image} width="100" alt="image not found" />
        </div>
      ))}
    </div>
  );
}
