const express = require("express");
const { mongoose } = require("mongoose");

const societySchema = new mongoose.Schema({
  wings: [
    {
      wing: {
        type: String,
      },
      floors: [
        {
          floor: {
            type: Number,
          },
          flats: [
            {
              flatNumber: {
                type: Number,
              },
              ownerFname: {
                type: String,
              },
              ownerLname: {
                type: String,
              },
              ownerContactNo: {
                type: Number,
              },
            },
          ],
        },
      ],
    },
  ],
});

const Building = mongoose.model("Building", societySchema);

module.exports = Building;
