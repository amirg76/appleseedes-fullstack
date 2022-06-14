import express from "express";
import users from "./users.js";
const app = express();
app.use(express.urlencoded());

app.get("/:param1/:param2", (req, res) => {
  res.json([req.params.param1, req.params.param2]);
});

app.get("/users", (req, res) => {
  res.json(users.getAllUser());
});

app.post("/users", (req, res) => {
  const { id, name, email } = req.body;
  users.addUser({ id, name, email });
  res.json(users.getAllUser());
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  users.updateUser(id, name, email);
  res.json(users.getAllUser());
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  users.deleteUser(id);
  res.json(users.getAllUser());
});
app.listen(3000);
