import bodyParser from "body-parser";
import express from "express";
import functions from "./apiCalls.js";

const { getProfile, getFees, payFee } = functions;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/getProfile", (req, res) => {
  const user = req.query.user;
  getProfile(user).then((data) => res.json(data));
});

app.get("/getFees", (req, res) => {
  const user = req.query.user;
  getFees(user).then((data) => res.json(data));
});

app.post("/payFee", (req, res) => {
  const payed = req.query.payed;
  payFee(payed).then((data) => res.json(data));
});

app.listen(3001, () => console.log("started"));
