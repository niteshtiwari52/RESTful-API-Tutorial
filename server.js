const express = require("express");
const DbConnection = require("./DatabaseConnection");
const dotenv = require("dotenv");
// importing Routes
const IdeaRoutes = require("./routes/idea.routes");
const app = express();

dotenv.config();
app.use(express.json()); // it converts JSON into javascript object
DbConnection();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "WELCOME TO THE RESTful API.",
  });
});

// redirect to  idea routes
app.use("/ideas", IdeaRoutes);

app.listen(8080, () => {
  console.log(process.env.MONGO_URI);
  console.log(`my Node js server started on port 8080`);
});
