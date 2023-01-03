import frontImage from "../../media/Cueva.jpg";
import frontImage2 from "../../media/Mano.jpg";
import frontImage3 from "../../media/Principito.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {

  return (
    <div className='full-container'>
      
      <Carousel className='carrusel-container'>
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
              id='carrusel-image'
              className="d-block w-100 image-carousel"
              src={frontImage2}
              alt="image not found"
            />
         
        </Carousel.Item>
        <Carousel.Item>
         
            <img
              id='carrusel-image'
              className="d-block w-100 image-carousel"
              src={frontImage}
              alt="image not found"
            />
         
        </Carousel.Item>
      </Carousel>
      {/* <div className='arrow-container-mobile'>
        <img className='arrow-mobile' src={frontImage} alt="image not found" />
      </div> */}
    </div>

  );
}

export default Carrusel;
