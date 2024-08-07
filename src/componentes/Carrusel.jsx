// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import fondocarCarrito from '../assets/fondocarCarrito.jpg';
// import fondoCardCarrito from '../assets/fondoCardCarrito.avif';

// export const Carrusel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, // Mostrar solo una imagen a la vez
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="carrusel-container">
//       <Slider {...settings}>
//         <div>
//           <img src={fondocarCarrito} alt="Carrito" />
//         </div>
//         <div>
//           <img src={fondoCardCarrito} alt="Card Carrito" />
//         </div>
//         <div>
//           <img src={fondocarCarrito} alt="Carrito" />
//         </div>
//         {/* Agrega más elementos según sea necesario */}
//       </Slider>
//     </div>
//   );
// };
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import fondocarCarrito from '../assets/fondocarCarrito.jpg';
import fondoCardCarrito from '../assets/fondoCardCarrito.avif';

export const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Oculta las flechas
    autoplay: true, // Reproduce automáticamente
    autoplaySpeed: 3000, // Velocidad de cambio de diapositiva
    fade: true, // Transición de desvanecimiento
    cssEase: 'ease-in-out',
  };

  return (
    <div className="carrusel-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={fondocarCarrito} alt="Carrito" />
        </div>
        <div className="slide-item">
          <img src={fondoCardCarrito} alt="Card Carrito" />
        </div>
        <div className="slide-item">
          <img src={fondocarCarrito} alt="Carrito" />
        </div>
        {/* Agrega más elementos según sea necesario */}
      </Slider>
    </div>
  );
};
