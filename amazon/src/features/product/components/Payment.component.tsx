import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js"

const PaymentComponent = () => {
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