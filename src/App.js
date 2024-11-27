import { RouterProvider } from "react-router-dom";
import RouterObject from "./util/router";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";  // PayPalScriptProvider 임포트

//24.11.25 지은 [완료] : Router, Routes, Route 적용 테스트
function App() {
  const initialOptions = {
    "client-id": "AcLogQ3HZFGJ_BT5uIk1GigWtUwbssi8psHmUEYXzEcl7vlzuQ5hw7ZvvZ87ZmvH7Fv4qIXs61PLt0rl",  // PayPal 클라이언트 ID
    currency: "USD",
  };

  return (
      // PayPalScriptProvider로 전체 앱을 감싸기
      <PayPalScriptProvider options={initialOptions}>
          {/* RouterProvider로 라우팅 처리 */}
          <RouterProvider router={RouterObject} />
      </PayPalScriptProvider>
  );
}

export default App;
