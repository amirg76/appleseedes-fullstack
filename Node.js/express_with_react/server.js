import express from "express";
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.get("https://goweather.herokuapp.com/weather/tel-aviv", (req, res) => {
  try {
    res.send.res.status(200).json(users);
  } catch (e) {
    res.status(e.status).send(e.message);
    // res.status(400).send("number already exists");
  }
});
app.listen(port, () => {
  console.log("Server is up on port 3000");
});
