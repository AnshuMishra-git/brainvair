const express = require("express");
const mongoose = require("mongoose");
const Cards = require("./dbCards");
const fabo = require("./fabo");
const cors = require("cors");

// const password= 78XcEnIS0fyP5G6I
//App Config

const app = express();
const port = process.env.PORT || 8001;
// const connection_url = `mongodb+srv://admin:78XcEnIS0fyP5G6I@cluster0.32a7n.mongodb.net/tinderdb?retryWrites=true&w=majority`;
const connection_url = `mongodb+srv://admin:78XcEnIS0fyP5G6I@cluster0.32a7n.mongodb.net/tinderdb?retryWrites=true&w=majority`;
//MiddleWare
app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// function getAll(data) {
//   console.log("get All Data Function Calling", data);
// }

function getAll(fabo) {
  console.log("In Fabo Function", fabo.num);
}
app.post("/fabo", (req, res) => {
  const fabo = req.body;
  // getAll(dbCard);
  // console.log("Fabo", fabo);

  getAll(fabo);
  Cards.create(fabo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({
        success: true,
        message: "Data Add Succesfully",
        data: data,
      });
      // res.status(201).send(data);
    }
  });
});

app.get("/fabo", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listners
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
