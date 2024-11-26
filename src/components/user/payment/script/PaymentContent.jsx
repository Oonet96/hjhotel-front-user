import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-router-dom";
import { useState } from "react";

//24.11.15 지은 [진행중] : 체크박스 기능 구현 성공
export default function PaymentCOntent() {
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
        <h2>약관동의</h2>
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
    </div>
  );
}
