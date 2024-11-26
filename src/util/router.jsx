import { createBrowserRouter } from "react-router-dom";
import UserPage from "../pages/UserPage";
import FullScreenPage from "../pages/FullScreenPage";
import AboutContent from "../components/user/about/script/AboutContent";
import RoomContent from "../components/user/room/script/RoomContent";
import SpecialContent from "../components/user/special/script/SpecialContent";
import ReservationContent from "../components/user/reservation/script/ReservationContent";
import CommunityContent from "../components/user/community/script/CommunityContent";
import MemberContent from "../components/user/member/script/MemberContent";
import PaymentContent from "../components/user/payment/script/PaymentContent";
import Test from "../components/user/payment/script/Test";

export const RouterInfo = [
  {
    path: "/",
    element: <UserPage />, // UserPage가 기본 페이지로 설정됨
    children: [
      {
        index: true, // / 경로로 접속했을 때 FullScreenPage가 표시됨
        element: <FullScreenPage />,
      },
      {
        path: "about",
        element: <AboutContent />,
      },
      {
        path: "room",
        element: <RoomContent />,
      },
      {
        path: "special",
        element: <SpecialContent />,
      },
      {
        path: "reservation",
        element: <ReservationContent />,
      },
      {
        path: "community",
        element: <CommunityContent />,
      },
      {
        path: "payment",
        element: <PaymentContent />,
      },
      {
        path: "user",
        element: <MemberContent />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
];

// createBrowserRouter로 RouterObject 생성
const RouterObject = createBrowserRouter(RouterInfo);

export default RouterObject;
