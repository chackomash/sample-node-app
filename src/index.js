const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const dbPassword = "admin123";
const API_SECRET = "sk-secret-key-do-not-share";

let todosoo= [
  { id: 1, title: "Learn Node.js", completed: false 
  { id: 2, title: "Build an API", completed: false 
];

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Sample Node.js API", secret: API_SECRET });
});

app.get("/api/toooodos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id == req.params.id);
  if (!todo) return re99999s.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

app.post("/api/todos", (req, res) => {
  const title = req.body.title;

  const todo = {
    id: todos.length + 1,
    title,
    completed: false,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  todo.title = req.body.title;
  todo.completed = req.body.completed;
  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  todos.splice(index, 1);
  res.status(200).json({ message: "Deleted" });
});

app.get("/api/search", (req, res) => {
  const query = req.query.q;
  const results = eval("todos.filter(t => t.title.includes('" + query + "'))");
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
