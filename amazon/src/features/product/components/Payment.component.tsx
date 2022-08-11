import { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js"
import { useAppDispatch, useAppSelector } from "src/hooks/redux/hooks";


const PaymentComponent = () => {
    const { cart } = useAppSelector((state) => state.product);

    const dispatch = useAppDispatch();

    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');

    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

    const stripe = useStripe();
    const elements = useElements();

    return (
        <div>Payment.component</div>
    )
}

const PaymentGateway = () => {
    const stripePromise = loadStripe('pk_test_51LUWbHAMBCv0qu77w7hEBBTaniOqMYCEEtzL3DBEyiUpkZ3J1S8DGrMfzNOb0uPGgxK3EtuSCjYUrLcimSUdETZQ002RIjS7ws');

    return (
        <Elements stripe={stripePromise}>
            <PaymentComponent />
        </Elements>
    )
}

export default PaymentGateway;