import { FormEvent, useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js"
import { useAppDispatch, useAppSelector } from "src/hooks/redux/hooks";
import { resetCart } from "../productSlice";


const PaymentComponent = () => {
    const { cart } = useAppSelector((state) => state.product);

    const dispatch = useAppDispatch();

    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');

    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        if (totalQty === 0) return;

        if (paymentStatus !== 'succeeded') return;

        dispatch(resetCart());
    })

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(totalQty === 0) return;

        if(!stripe || !elements) return;
    }

    return (
        <div style={{ fontSize: '20px' }}>
            <form onSubmit={handleSubmit} id="payment-form">
                <label htmlFor="card-element">Place order</label>
                <CardElement id="card-element" />
                {!isProcessing && (
                    <button
                        style={{
                            marginTop: '16px',
                            height: '31px', 
                            border: 'none',
                            backgroundColor: '#47A0F1',
                            color: '#000000',
                            display: 'flex',
                            fontWeight: 600,
                            fontSize: '20px',
                            padding: '24px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            width: '100%'
                        }}
                    >Pay</button>
                )}
                {isProcessing && <div>Processing...</div>}
                {!isProcessing && paymentStatus && <div>{paymentStatus}</div>}
            </form>
        </div>
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