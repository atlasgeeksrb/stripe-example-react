import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {initiatePayment} from "../services/stripePaymentService";
import StripePaymentForm from "./stripePaymentForm";
import config from "../config.json";

const stripePromise = loadStripe(config.stripeKey);

export default function Checkout() {
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        async function initPayment() {
            try {
                //@todo amount, items from checkout form
                initiatePayment(1200, [])
                .then((res) => setClientSecret(res.data.client_secret));
            } catch(ex) {
                console.log(ex);
            }
        };
        initPayment();
    }, [clientSecret]);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <React.Fragment>
      <h2>Checkout</h2>       
      {renderPaymentForm()}
    </React.Fragment>
  );

  function renderPaymentForm() {
    if(clientSecret) {
        return(
          <Elements options={options} stripe={stripePromise}>
            <StripePaymentForm />
        </Elements>
      );
    } 
    else {
        return('loading payment form...');
    }
  }
}