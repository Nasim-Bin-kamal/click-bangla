import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {
    const onToken = (token) => {
        console.log(token);
    }
    return (
        <div>
            <StripeCheckout
                name="Payment for your Order"
                currency='BDT'
                amount="2500"
                token={onToken}
                stripeKey="pk_test_51JvoX2HPRrHHjKcvTe3XSs1QWqAep8goq4Yr15zp1Sq2BBZx0xvABRuJpDbgDaHfW1RRKx6UagDUDt3jGWsyRIO600IHTY1VXG"
            />
        </div>
    );
};

export default Payment;