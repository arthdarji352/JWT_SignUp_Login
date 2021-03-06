const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
// require("dotenv").config();

// set up express
const app = express();
app.use(express.json());
app.use(cors());

// this variable is for online hosting like heroku or our localhost:5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose
mongoose.connect(
  "mongodb+srv://login:login@cluster0.kdmrg.mongodb.net/?retryWrites=true&w=majority",
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //   },
  (error) => {
    if (error) throw error;
    console.log("MongoDB connection established");
  }
);

// set up routes

// user routes
app.use("/users", require("./routes/userRouter"));
