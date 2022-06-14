import express from "express";

const app = express();

app.get("/numbers/", (req, res) => {
  res.send("success using " + req.method);
});
app.post("/numbers/", (req, res) => {
  res.send("success using " + req.method);
});
app.put("/numbers/", (req, res) => {
  res.send("success using " + req.method);
});
app.delete("/numbers/", (req, res) => {
  res.send("success using " + req.method);
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
