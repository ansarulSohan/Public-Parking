require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

//Middleware

//Routes
app.use("/api/sessions", require("./routes/sessions.route"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
