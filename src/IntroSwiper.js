// import React from 'react';
// import 'swiper/css'; 
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './IntroSwiper.css';
// import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
// import {Link }  from "react-router-dom";
// import React, { useRef } from 'react'; 

// const IntroSwiper = () => (
//   <div style={{ height: '100vh', width: '100%' }}>

//      {/* 햄버거 메뉴 */}
//      <div className="hamburger-menu">
//       <div className="hamburger-bar">
//         <Link to="#slide1"></Link> {/* Link로 변경 */}
//       </div>
//       <div className="hamburger-bar">
//         <Link to="#slide2"></Link> {/* Reservation으로 변경 */}
//       </div>
//       <div className="hamburger-bar">
//         <Link to="#slide3"></Link> {/* About Us 링크 추가 */}
//       </div>
//       <div className="hamburger-bar">
//         <Link to="#slide4"></Link> {/* Room View 링크 추가 */}
//       </div>
//       {/* <div className="hamburger-bar">
//         <Link to="#slide5"></Link> {/* Special Offers 링크 추가 
//       </div> */}
//     </div>

import React, { useRef } from 'react'; // useRef를 추가로 가져옵니다
import 'swiper/css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './IntroSwiper.css';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { Link } from "react-router-dom";

const IntroSwiper = () => {
  const swiperRef = useRef(null); // useRef를 활용

  const navigateToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%', }}>
      {/* 햄버거 메뉴 */}
      <div className="hamburger-menu"style={{ zIndex: 1000 }}>
        <div className="hamburger-bar" onClick={() => navigateToSlide(0)}>
          <a href="#slide1"></a>
        </div>
        <div className="hamburger-bar" onClick={() => navigateToSlide(1)}>
          <a href="#slide2"></a>
        </div>
        <div className="hamburger-bar" onClick={() => navigateToSlide(2)}>
          <a href="#slide3"></a>
        </div>
        <div className="hamburger-bar" onClick={() => navigateToSlide(3)}>
          <a href="#slide4"></a>
        </div>
      </div>

      {/* 고정되는 내용 */}
      <div id="fixed-elements"style={{ zIndex: 1100 }}>
        <div className="intro_hotel_logo logo2"><Link to ="/menu">SlrklhiHotel</Link></div>
        <div className="intro_menu_link link2">
          <a href="/menu">: Menu</a>
        </div>
        <div className="Reservation_link">
          <a href="/reservation">Reservation</a>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        loop
        mousewheel
        modules={[Navigation, Pagination, Mousewheel]}
        style={{ height: '100vh', width: '100%' }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {/* 1_slide */}
        <SwiperSlide id="slide1">
          <div id="HomeIntro">
            <video autoPlay muted loop>
              <source src="/videos/city fly view.mp4" type="video/mp4" />
            </video>
            <h1 className="intro_Slogan">Welcome to Slrklhi Hotel</h1>
            <p className="intro_description">
              Discover the best of Slrklhi in a modern, stylish, and comfortable environment.
            </p>
          </div>
        </SwiperSlide>

        {/* 2_slide */}
        <SwiperSlide id="slide2">
          <div id="HomeIntro">
            <video autoPlay muted loop>
              <source src="/videos/city inside1.mp4" type="video/mp4" />
            </video>
            <h1 className="intro_Slogan2">Modern Comforts, Natural Escapes</h1>
            <p className="intro_description2">
              Discover the best of Slrklhi in a modern, stylish, and comfortable environment.
            </p>
          </div>
        </SwiperSlide>

        {/* 3_slide */}
        <SwiperSlide id="slide3">
          <div id="HomeIntro">
            <video autoPlay muted loop>
              <source src="/videos/city lettering view.mp4" type="video/mp4" />
            </video>
            <p className="intro_description3">
              Discover the best of Slrklhi in a modern, stylish, and comfortable environment.
            </p>
          </div>
        </SwiperSlide>

        {/* 4_slide */}
        <SwiperSlide id="slide4">
          <div id="HomeIntro">
            <video autoPlay muted loop>
              <source src="/videos/city night2.mp4" type="video/mp4" />
            </video>
            <h1 className="intro_Slogan4">Urban Sophistication, Coastal Tranquility</h1>
            <p className="intro_description4">
              Discover the best of Slrklhi in a modern, stylish, and comfortable environment.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IntroSwiper;

// -------------------------------------------------------
// import React, { useRef } from 'react';
// import 'swiper/css'; 
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './IntroSwiper.css';
// import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     id: "slide1",
//     video: "/videos/city fly view.mp4",
//     slogan: "Welcome to Slrklhi Hotel",
//     description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment."
//   },
//   {
//     id: "slide2",
//     video: "/videos/city inside1.mp4",
//     slogan: "Modern Comforts, Natural Escapes",
//     description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment."
//   },
//   {
//     id: "slide3",
//     video: "/videos/city lettering view.mp4",
//     slogan: "",
//     description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment."
//   },
//   {
//     id: "slide4",
//     video: "/videos/city night2.mp4",
//     slogan: "Urban Sophistication, Coastal Tranquility",
//     description: "Discover the best of Slrklhi in a modern, stylish, and comfortable environment."
//   }
// ];

// const menuItems = [
//   { label: "Home", slideIndex: 0 },
//   { label: "Reservation", slideIndex: 1 },
//   { label: "About Us", slideIndex: 2 },
//   { label: "Room View", slideIndex: 3 }
// ];

// const IntroSwiper = () => {
//   const swiperRef = useRef(null);

//   const handleMenuClick = (slideIndex) => {
//     if (swiperRef.current) {
//       swiperRef.current.slideTo(slideIndex);
//     }
//   };

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       {/* 햄버거 메뉴 */}
//       <div className="hamburger-menu">
//         {menuItems.map((item) => (
//           <div
//             key={item.label}
//             className="hamburger-bar"
//             onClick={() => handleMenuClick(item.slideIndex)}
//           >
//             {item.label}
//           </div>
//         ))}
//       </div>

//      {/* 고정되는 내용 */}
//      <div className="fixed-elements">
//         <div className="intro_hotel_logo logo2">SlrklhiHotel</div>
//         <div className="intro_menu_link link2">
//           <Link to="/about">About</Link>
//         </div>
//         <div className="Reservation_link">
//           <Link to="/reservation">Reservation</Link>
//         </div>
//       </div>

//       {/* Swiper */}
//       <Swiper
//         direction="vertical"
//         slidesPerView={1}
//         spaceBetween={0}
//         loop
//         mousewheel
//         modules={[Navigation, Pagination, Mousewheel]}
//         style={{ height: '100vh', width: '100%' }}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//       >
//          {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div id="HomeIntro">
//               <video autoPlay muted loop>
//                 <source src={slide.video} type="video/mp4" />
//               </video>
//               {slide.slogan && (
//                 <h1 className={slide.classes.slogan}>{slide.slogan}</h1>
//               )}
//               <p className={slide.classes.description}>{slide.description}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default IntroSwiper;