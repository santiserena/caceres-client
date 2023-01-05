import st from './Home.module.css';
import Navbar from '../Navbar/Navbar';

import Carousel from "../Carousel/Carousel";

export default function Home(): JSX.Element {

  return (
    <main className={st.main}>
      <Navbar/>
      {/* <h3 className={st.smallFont, st.smalltitle1}>ARTIST</h3> */}
      <h1 className={st.header}>EMILIANO CÁCERES</h1>
      {/* <h3 className={st.smallFont}>STILE</h3> */}
      <Carousel/>
      
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse,
        delectus ullam ducimus sequi maiores maxime dicta culpa. Sed culpa
        ipsam, vitae facere vel voluptatem quasi rem accusamus autem aliquid!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse,
        delectus ullam ducimus sequi maiores maxime dicta culpa. Sed culpa
        ipsam, vitae facere vel voluptatem quasi rem accusamus autem aliquid!
        
      </p>
      <footer>Footer</footer>

    </main>
  );
}
