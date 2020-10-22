const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Hel2hE18VZfQIN06UmQPnUFMljIWQSwSbSciY98Yb8UiUbIFGcjzhDRCM8zIik2T7yRnTAC1I1LflW51q1DZ70X00YDFvZodI"
);

const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get("/", (request, response) => response.status(200).send("Hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("TOTAL: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-169b5/us-central1/api
