import { useLocation } from "react-router-dom";

//24.11.25 지은 [완료] : AboutContent 테스트.
export default function AboutContent() {
  const location = useLocation();
  console.log(location); // 현재 경로 확인
  return (
    <div>
      <h1>호텔 소개</h1>
      <div>호텔 소개 페이지가 하위 컴포넌트식으로 들어갈 예정</div>
    </div>
  );
}
