import { createBrowserRouter ,Navigate} from "react-router-dom";
import UserPage from "../pages/UserPage";
import RoomContent from "../components/user/room/script/RoomContent";
import SpecialContent from "../components/user/special/script/SpecialContent";
import ReservationContent from "../components/user/reservation/script/ReservationContent";
import CommunityContent from "../components/user/community/script/CommunityContent";
import PaymentContent from "../components/user/payment/script/PaymentContent";
import MemberContent from "../components/user/member/script/MemberContent";
import AboutContent from "../components/user/about/script/AboutContent";
import ReservationGuide from "../components/user/reservation/script/ReservationGuide";
import ReservationCheckOut from "../components/user/reservation/script/ResevationCheckOut";
import ReservationCalendar from "../components/user/reservation/script/ReservationCalendar";
import ReservationForm from "../components/user/reservation/script/ReservationForm";
import MenuLink from "../pages/MenuLink"; 
import IntroSwiper from "../pages/IntroSwiper";
import UsersNoticeList from "../components/user/community/script/UsersNoticeList";
import UsersNoticeDetailPage from "../components/user/community/script/UsersNoticeDetailPage";

// 사용자 관련 페이지 컴포넌트 추가 import
import MemberTermsPage from "../components/user/member/script/MemberTermsPage";
import MemberRegister from "../components/user/member/script/MemberRegister";
import MemberLoginPage from "../components/user/member/script/MemberLoginPage";
import MemberSignUp from "../components/user/member/script/MemberSignUp";
import MemberSignUpComplete from "../components/user/member/script/MemberSignUpComplete";

export const RouterInfo = [
  
   {
    path: "/main",
     element: <IntroSwiper />, // IntroSwiper 메인 풀페이지
   },
  {
    path: "/menu",
    element: <MenuLink />, // Header/Footer 없는 페이지
  },

  {
    path: "/",
    element: <UserPage />, //  경로에서 UserPage를 기본으로 렌더링
    children: [
     
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
        children: [
          {
            path: "",
            element: <Navigate to="guide" />
          },
          {
            path: "guide",
            element: <ReservationGuide/>
          },
          {
            path: "check_out",
            element: <ReservationCheckOut/>,
            children: [
              {
                path: "",
                element: <Navigate to="calendar" />
              },
              {
                path: "calendar",
                element: <ReservationCalendar/>
              },
              {
                path: "form",
                element: <ReservationForm/>
              }
            ]
          }
        ]
      },
      {
        path: "community",
        element: <CommunityContent />,
        children: [
          {
            path: "notice",
            element: <UsersNoticeList />,
          },
          {
            path: "notice/:noticeId",
            element: <UsersNoticeDetailPage />
          },
        ]
      },
      {
        path: "payment",
        element: <PaymentContent />,
      },
      {
        path: "users",
        element: <MemberContent />, // MemberContent를 부모로 설정
        children: [
          {
            path: "terms", // /users/terms
            element: <MemberTermsPage />,
          },
          {
            path: "register", // /users/register
            element: <MemberRegister />,
          },
          {
            path: "login", // /users/login
            element: <MemberLoginPage />,
          },
          {
            path: "signup", // /users/signup
            element: <MemberSignUp />,
          },
          {
            path: "signupcom", // /users/signupcom
            element: <MemberSignUpComplete />,
          },
        ],
      },
    ],
  },
];

// createBrowserRouter로 RouterObject 생성
const RouterObject = createBrowserRouter(RouterInfo);

export default RouterObject;
