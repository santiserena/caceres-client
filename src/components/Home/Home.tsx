import st from './Home.module.css';




//HACER COMPONENTE DE BOTON





import Carousel from "../Carousel/Carousel";

export default function Home(): JSX.Element {

  return (
    <div className={st.tex}>
      <h1>Emiliano Cáceres</h1>
      
      <Carousel/>
      
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse,
        delectus ullam ducimus sequi maiores maxime dicta culpa. Sed culpa
        ipsam, vitae facere vel voluptatem quasi rem accusamus autem aliquid!
      </p>
      <footer>Footer</footer>

    </div>
  );
}
