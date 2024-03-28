import React, { useState, useEffect, useCallback } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.
const stripePromise = loadStripe("pk_test_51OxUmMEk9vJEdqz3Z1Qm536dXGlsiPuMRT06WG2EFhvXqUdDLWrw3LUmLG3cDZ6OwOI2tsEKOedaqc4LkA6Tr3uq00nAK06OCm");

export const CheckoutForm = () => {
  const fetchClientSecret = useCallback(async () => {
    try {
      // Create a Checkout Session
      const response = await fetch("https://glorious-broccoli-v6vxgpx465v4fxvwg-3001.app.github.dev/api/create-checkout-session", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      console.log(data, "we are supposed to see this!!")
      return data.clientSecret;
    } catch (error) {
      // Handle the error here
      console.error("Error fetching client secret:", error);
      // Optionally, you can throw the error again to propagate it to the caller
      throw error;
    }
  }, []);

  const options = {fetchClientSecret};

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}