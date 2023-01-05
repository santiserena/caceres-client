import frontImage1 from "../../media/spaceship.jpg";
import frontImage2 from "../../media/house.jpg";
import frontImage3 from "../../media/hand.jpg";
import frontImage4 from "../../media/room.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import st from './Carousel.module.css';

function Carrusel() {

  return (
    <div className={st.main}>
      <div className={st.carousel}>

        <div className="full-container">
          <Carousel className="carrusel-container">
            {/*  <Carousel.Item className='fitten'>
              
                <img
                  id='carrusel-image'
                  className="d-block w-100 image-carousel"
                  src={frontImage3}
                  alt="image not found"
                />
              
            </Carousel.Item> */}
            <Carousel.Item>
              <img
                id="carrusel-image"
                className="d-block w-100 image-carousel"
                src={frontImage1}
                alt="image not found"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="carrusel-image"
                className="d-block w-100 image-carousel"
                src={frontImage2}
                alt="image not found"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="carrusel-image"
                className="d-block w-100 image-carousel"
                src={frontImage3}
                alt="image not found"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="carrusel-image"
                className="d-block w-100 image-carousel"
                src={frontImage4}
                alt="image not found"
              />
            </Carousel.Item>
          </Carousel>
          {/* <div className='arrow-container-mobile'>
            <img className='arrow-mobile' src={frontImage} alt="image not found" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
