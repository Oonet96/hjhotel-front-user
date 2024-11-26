import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

//24.11.15 지은 [진행중] : 체크박스 기능 구현 성공
export default function PaymentContent() {
  const [data, setData] = useState(); // ustState hook. data가 상태변수,
  // setData가 data 변수를 업데이트 해주는 함수

  useEffect(() => {
    fetch(`http://localhost:8080/api/test`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("응답 실패");
        }
        return response.text(); // 응답받은 data를 text 형식으로 return 하겠다는 의미.
      })
      .then((apiData) => {
        // api 요청하고 받은 데이터를 apiData 매개변수에 담기
        console.log(apiData); // apiData가 잘 받아졌는지 콘솔창으로 확인하기 위한 용도.
        setData(apiData); // setData함수를 호출해서 인자값으로 apiData를 주기.
        // setData함수가 apiData를
        // cosnt[data, setData] 여기서 data라는 상태변수에
        // 값을 update시켜줌.
        // 즉 처음에 [data. setData]에서
        // data 라는 상태변수에는 아무런 값이 없다가
        // api 요청하고 받아온 apiData를
        // setData함수를 호출하여 update 해주면
        // data 상태변수에 apiData가 저장된다.
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, [data]);

  // 개별 체크박스들의 상태 (초기값: 모두 선택되지 않음)
  const [checkboxes, setCheckboxes] = useState([false, false, false]);

  // 전체선택 체크박스 상태 (초기값: 선택되지 않음)
  const [isChecked, setIsChecked] = useState(false);

  // 전체선택 체크박스를 클릭했을 때 모든 체크박스 상태 업데이트
  const handleCheckAll = () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    setCheckboxes(checkboxes.map(() => newCheckedStatus)); // 전체 체크박스 상태 일괄 업데이트
  };

  // 개별 체크박스를 클릭했을 때 상태 업데이트
  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index]; // 해당 체크박스 상태만 변경

    setCheckboxes(newCheckboxes);

    // 전체선택 체크박스 상태 업데이트: 모든 체크박스가 선택되면 전체선택 체크박스도 선택됨
    setIsChecked(newCheckboxes.every((checkbox) => checkbox));
  };

  // todo: 전체 선택인 상태에서 list 1개라도 해제되면 전체선택에 checkbox가 해제.
  // problem: 전체 선택, 전체 해제는 성공. 각 list 1개라도 해제하면 전체 해제가 됨.
  // thinking: 각 list 1개 선택을 가능하되 전체 선택되어도 해제되지 않고 해당 list만 해제되게.

  return (
    <div className="payment_container">
      <h1>예약 결제</h1>
      <div className="payment_selectRoomList">
        <h2>선택 객실 목록</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>객실명</th>
                <th>이용일</th>
                <th>인원</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>디럭스룸</td>
                <td>2024-11-11</td>
                <td>성인 2/아동 0/유아 0</td>
                <td>200,000원</td>
              </tr>
            </tbody>
          </table>
          <div>
            <ul>
              <li>총 금액</li>
              <li>200,000원</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="payment_termsConditions">
        <h2>약관동의 {data}</h2>
        <div>
          <Form>
            {/* 전체선택 체크박스 */}
            <Form.Check
              type="checkbox"
              label="전체선택"
              checked={isChecked}
              onChange={handleCheckAll}
            />

            {/* 개별 체크박스들 */}
            {checkboxes.map((checked, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={`항목 ${index + 1}`}
                checked={checked}
                onChange={() => handleCheckboxChange(index)}
              />
            ))}
          </Form>
        </div>
      </div>
      <div>
        여기는 React. Client Server임. <br />
        여기는 Spring Boot. Web Server임. <br />
        Web Server와 연결 상태: {data}
      </div>
    </div>
  );
}
