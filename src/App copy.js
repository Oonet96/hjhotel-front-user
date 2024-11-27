import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Intro from './Intro';
import IntroSwiper from './IntroSwiper';
import 'swiper/css'; // 스와이퍼 @11.1.15버젼   7+버젼과 css임포트경로가 다름
import ErrorBoundary from './ErrorBoundary'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from'./Footer';
import Header from './Header';
import MenuLink from './MenuLink';
import About from './About';
import RoomView from './RoomView';
import Reservation from './Reservation';
import Community from './Community';
import Special from './Special';




const App = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
        
      <BrowserRouter>
      <ErrorBoundary>
      {/* 헤더와 푸터는 IntroSwiper와 MenuLink에서는 제외 */}
      <Routes>
            <Route path="/" element={<IntroSwiper />} />
            <Route path="/menu" element={<MenuLink />} />
            <Route 
              path="*" 
              element={
                <>
                  <Header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} />
                  <div style={{ paddingTop: '60px', paddingBottom: '50px' }}>
      {/* 라우트 정의 */}
    
                   <Routes>
                      <Route path="/about" element={<About />} />
                      <Route path="/roomview" element={<RoomView />} />
                      <Route path="/special" element={<Special />} />
                      <Route path="/reservation" element={<Reservation />} />
                      <Route path="/community" element={<Community />} />
                      <Route path="*" element={<div>404 Page Not Found</div>} />
                    </Routes>
                  </div>
                  <Footer style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }} />
                </>
              }
            />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
};

export default App;