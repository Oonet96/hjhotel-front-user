import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function PaymentContent() {
// 예약 정보를 저장할 상태
const [reservationData, setReservationData] = useState(null);
// 로딩 상태
const [loading, setLoading] = useState(true);
// 에러 상태
const [error, setError] = useState(null);

// 컴포넌트가 마운트될 때 API 호출
useEffect(() => {
  const fetchReservationData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/payments/reservation-list'); // 실제 API URL로 변경
      if (!response.ok) {
        throw new Error('Failed to fetch reservation data');
      }
      const data = await response.json();
      setReservationData(data); // 데이터를 상태에 저장
      setLoading(false); // 로딩 상태 종료
    } catch (error) {
      setError(error.message); // 에러 상태 처리
      setLoading(false); // 로딩 상태 종료
    }
  };

  fetchReservationData();
}, []); // 빈 배열을 두어 컴포넌트 마운트 시 한 번만 실행

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}

if (!reservationData) {
  return <div>No reservation data available.</div>;
}


return (
  <div className="container">
    <div>
      <h3>예약 정보</h3>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}
        className="table table-striped"
      >
        <thead>
          <tr>
            {/* 컬럼 타이틀 */}
            {Object.keys(reservationData).map((key) => (
              <th key={key} style={{ padding: '10px', textAlign: 'left' }} scope="col">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* 컬럼 바디 (값들) */}
            {Object.values(reservationData).map((value, index) => (
              <td key={index} style={{ padding: '10px' }}>
                {typeof value === 'string' && value.includes('T') ? (
                  // 날짜 형식일 경우, 'T'를 제거하고 보기 좋게 표시
                  new Date(value).toLocaleDateString()
                ) : (
                  value
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3>결제방식 선택</h3>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="paypal" id="payment_paypal"/>
        <label className="form-check-label" htmlFor="payment_paypal">PayPal</label>
      </div>
    </div>
    <button class="btn btn-primary" type="submit">결제하기</button>
  </div>
  );
}
