const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const Building = require("./models/schema.js");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db/db.js");
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.get("/getAllResidence", async (req, res) => {
  const showData = await Building.find();
  res.send(showData);
});
app.post("/add", async (req, res) => {
  try {
    const addOwner = new Building(req.body);
    addOwner.save();
  } catch (e) {
    res.send(e);
  }
});

app.get("/show/:buildingID", async (req, res) => {
  try {
    // console.log("floorData", floorData);
    const buildingID = req.params.buildingID;
    const building = await Building.findById(buildingID);
    const wing = () => {
      for (const wing of building.wings) {
        if (wing) {
        }
      }
    };

    // if (building) {
    //   const floorData = await Building.findById(req.params.floorID);
    //   //   res.send(building);
    //   // const flat = building[0].floors;
    //   // console.log(flat);
    // }
    // Access the nested data
  } catch (e) {
    res.send(e);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const result = await Building.findByIdAndUpdate({ _id: id }, updateData);
    res.send(result);
  } catch (e) {
    console.log(e);
  }
});

app.delete("/remove/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const removeData = await Building.findByIdAndDelete({ _id: id });
    if (removeData) {
      res.send("Data Deleted Successfully");
    }
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
