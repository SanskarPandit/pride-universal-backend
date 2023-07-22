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
              wing: {
                type: String,
              },
              floor: {
                type: Number,
              },
              flatNumber: {
                type: Number,
              },
              owner_fname: {},
              owner_lname: {},
              owner_contact_number: {},
            },
          ],
        },
      ],
    },
  ],
});

const Building = mongoose.model("Building", societySchema);

module.exports = Building;
