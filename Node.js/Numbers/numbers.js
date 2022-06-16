import express from "express";
import { numArray, createNum, updateNum, deleteNum } from "./utils.js";
const app = express();
app.use(express.json());
// app.use(express.urlencoded());

app.get("/numbers/", (req, res) => {
  res.send(numArray);
});
app.post("/numbers/", (req, res) => {
  try {
    createNum(req.body, res);
    res.status(200).send(numArray);
  } catch (e) {
    res.status(e.status).send(e.message);
    // res.status(400).send("number already exists");
  }
  // res.status(200).json(numArray);
});
app.put("/numbers/:num", (req, res) => {
  try {
    const numSearch = req.params.num;
    const newNumber = req.body;
    updateNum(numSearch, newNumber, res);
  } catch (e) {
    console.log(e);
    // res.status(400).send("e.message");
    // res.status(400).send("number already exists");
  }
});
app.delete("/numbers/:num", (req, res) => {
  try {
    const numSearch = req.params.num;
    deleteNum(numSearch, res);
    res.status(200).send(numArray);
  } catch (e) {
    res.status(e.status).send(e.message);
    // res.status(400).send("number already exists");
  }
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
