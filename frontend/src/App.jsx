import React, { useEffect, useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import "./App.css";

function App() {
  const [amount, setamount] = useState(20);

  const payment = async (token) => {
    try {
      const data = await axios.post("http://localhost:3000/pay", {
        amount: `${amount * 100}`,
        token: token,
      });
      console.log("after payment data:", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mainBox">
        <StripeCheckout
          name="doiWaala.com"
          description={`Your amount is $${amount}`}
          token={payment}
          stripeKey="pk_test_51Off20H549Htd2C0L3Qx2vBjuAaDXolsMTwA3RHqbTd5tn4MqlKlb3f7ut6BfjLIWSs3T30RvHGIYsKjf52h81Yb00jCQEMgIh"
          amount={amount * 100}
        />
      </div>
    </>
  );
}

export default App;
