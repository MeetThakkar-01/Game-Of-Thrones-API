import mongoose from "mongoose";

const Schema = mongoose.Schema;

const gotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  battle_number: {
    type: String,
    required: true,
  },
  attacker_king: {
    type: String,
    required: true,
  },
  defender_king: {
    type: String,
    required: true,
  },
  attacker_1: {
    type: String,
    required: true,
  },
  attacker_2: {
    type: String,
    required: false,
  },
  attacker_3: {
    type: String,
    required: false,
  },
  attacker_4: {
    type: String,
    required: false,
  },
  defender_1: {
    type: String,
    required: true,
  },
  defender_2: {
    type: String,
    required: false,
  },
  defender_3: {
    type: String,
    required: false,
  },
  defender_4: {
    type: String,
    required: false,
  },
  attacker_outcome: {
    type: String,
    required: true,
  },
  battle_type: {
    type: String,
    required: true,
  },
  major_death: {
    type: String,
    required: true,
  },
  major_capture: {
    type: String,
    required: true,
  },
  attacker_size: {
    type: String,
    required: true,
  },
  defender_size: {
    type: String,
    required: true,
  },
  attacker_commander: {
    type: String,
    required: true,
  },
  defender_commander: {
    type: String,
    required: true,
  },
  summer: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
});

const MyModel = mongoose.model("test", gotSchema);

export default MyModel;
