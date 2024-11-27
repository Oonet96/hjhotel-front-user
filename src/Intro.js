// import React from 'react';
// import 'swiper/css'; 
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './Intro.css';
// import { Navigation, Pagination, Mousewheel } from 'swiper/modules';



// const Intro = () => (
//   <div style={{ height: '100vh', width: '100%' }}>

//     {/* 햄버거 메뉴 */}
//     <div className="hamburger-menu">
//       <div className="hamburger-bar"><a href='#'></a></div>
//       <div className="hamburger-bar"><a href='#'></a></div>
//       <div className="hamburger-bar"><a href='#'></a></div>
//       <div className="hamburger-bar"><a href='#'></a></div>
//     </div>

//     {/* 고정되는 내용 */}
//     <div className="fixed-elements">
//       <div className="intro_hotel_logo">SlrklhiHotel</div>
//       <div className="intro_menu_link">
//         <a href="#">Menu</a>
//       </div>
//     </div>

//      {/* swiper */}
//     <Swiper
//       direction="vertical"
//       slidesPerView={1}
//       spaceBetween={0}
//       loop
//       mousewheel={true}
//       modules={[Navigation, Pagination, Mousewheel]}
//       style={{ height: '100vh', width: '100%' }}
//       >

//         {/* 1_slide */}
//       <SwiperSlide>
//       <div id="HomeIntro">
//         <video autoPlay muted loop
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }} >
//           <source src="/videos/city fly view.mp4" type="video/mp4" />
//         </video>
//         <h1 className="intro_Slogan">Welcome to Slrklhi Hotel</h1>
//         <p className="intro_description">Discover the best of slrklhi in a modern, stylish, and comfortable environment.</p>
//        </div>

//       </SwiperSlide>

//       {/* 2_slide */}
//       <SwiperSlide>
//       <div id="HomeIntro logo2">
//         <video
//           autoPlay muted loop
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
//           <source src="/videos/city inside1.mp4" type="video/mp4" />
//         </video>
//         <h1 className="intro_Slogan2">Modern Comforts, Natural Escapes</h1>
//         <p className="intro_description2">Discove the best of slrklhi in a modern,<br/> stylish, and comfortable environment.<br/>loremof slrklhi in a modern,stylish, and comfortable 
//         </p>
//       </div>
//       </SwiperSlide>
//       </Swiper>
//     </div>
// );

  
//    export  default Intro;