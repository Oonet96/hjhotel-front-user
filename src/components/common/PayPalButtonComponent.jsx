import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButtonComponent() {
    const [message, setMessage] = useState("");

    const createOrder = async () => {
        // 주문 생성 로직
    };

    const onApprove = async (data, actions) => {
        // 결제 승인 후 처리 로직
    };

    return (
        <div>
            <PayPalButtons
                style={{ shape: "rect", layout: "vertical", color: "gold" }}
                createOrder={createOrder}
                onApprove={onApprove}
            />
            <p>{message}</p>
        </div>
    );
}

export default PayPalButtonComponent;