import { RouterProvider } from "react-router-dom";
import RouterObject from "./util/router";

//24.11.25 지은 [완료] : Router, Routes, Route 적용 테스트
function App() {
  return <RouterProvider router={RouterObject} />;
}

export default App;
