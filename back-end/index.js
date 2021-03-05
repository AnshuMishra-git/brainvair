const express = require("express");
const mongoose = require("mongoose");
const Cards = require("./dbCards");
const Fabonicci = require("./fabo");
const PC = require("./pg");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8001;
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

function getAll(fabo) {
  let i,
    n,
    t1 = 0,
    t2 = 1,
    nextTerm = 0;
  let arr = [];

  console.log("In Fabo Function", fabo.num);
  while (t1 <= fabo.num) {
    arr.push(t1);
    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
  }
  console.log(arr);
  return arr;
}

app.post("/fabo", (req, res) => {
  const fabnum = req.body;
  const results = getAll(fabnum);
  Fabonicci.create(fabnum, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({
        success: true,
        message: "Data Add Succesfully",
        data: data,
        result: results,
      });
      // res.status(201).send(data);
    }
  });
});

arr1 = [];
function checkValue(data1, data2, data3) {
  for (let i = 0; i < data1.length; i++) {
    for (let j = 0; j < data2.length; j++) {
      for (let k = 0; k < data3.length; k++) {
        console.log(data1[i], data2[j], data3[k]);
        arr1.push(data1[i], data2[j], data3[k]);
      }
    }
  }
  return arr1;
}

app.post("/pg", (req, res) => {
  const pc = req.body;

  const result = checkValue(pc.num, pc.num1, pc.num2);

  PC.create(pc, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({
        success: true,
        message: "Data Add Succesfully",
        data: data,
        result: result,
      });
    }
  });
});

// Listners
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
