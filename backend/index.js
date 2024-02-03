require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.SECRECTKEY);
const cors = require("cors");
const app = express();

// all middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/pay", async (req, res) => {
  console.log(req.body.token);
  // res.status(200).json({
  //   token: req.body.token,
  // });
  await stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  });
});

app.listen(3000, () => {
  console.log("server runnning on port 3000 ");
});
