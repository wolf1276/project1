import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to page1");
});

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/main", (req, res) => {
  res.send("welcome to mainpage");
});
app.get("/about", (req, res) => {
  res.send("welcome to about page");
});
export default app;
