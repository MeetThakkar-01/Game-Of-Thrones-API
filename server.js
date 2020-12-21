import express from "express";
import "./config.mjs";
import mongoose from "mongoose";
import MONGO_URI from "./config.mjs";
import MyModel from "./model.mjs";
import cors from "cors";

const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors());

//Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDb Connected"));

// Root Route
app.get("/", (req, res) => {
  res.json({ Greetings: "welcome" });
});

// returns list(array) of all the places where the battle has taken place.
app.get("/list", async (req, res) => {
  try {
    const data = await MyModel.find();
    if (!data) throw Error("Nothing to Show");
    const newData = { list: [] };
    data.map((item) => {
      if (item.location) {
        newData.list.push(item.location);
      }
    });
    res.json(newData).status(200);
  } catch (err) {
    console.log({ msg: err });
  }
});

// returns the total number of battles occurred.
app.get("/count", async (req, res) => {
  try {
    const data = await MyModel.count();
    const newData = { BattleCount: 0 };
    if (!data) throw Error("Nothing to Show");
    newData.BattleCount = data;
    res.send(newData);
  } catch (err) {
    console.log({ msg: err });
  }
});

// return list of battles where 'attacker_king' or 'defender_king' was 'Robb Stark'
// also works for multiple queries
app.get("/search", async (req, res) => {
  const q = req.query;
  try {
    const data = await MyModel.find();
    var newData = null;
    var tempData = null;
    if (!data) throw Error("Nothing to Show");
    if (Object.keys(q).length === 0) {
      // NO query parameters, send it all...
      newData = data;
    } else {
      // We have a query, filter response to match request
      newData = data.filter(function (data) {
        return Object.keys(this).every((key) =>
          data[key].toLowerCase().includes(this[key].toLowerCase())
        );
      }, q);
    }
    res.json(newData).status(200);
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log("Server running"));
