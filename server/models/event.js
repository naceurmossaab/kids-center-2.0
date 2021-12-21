const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title   :{ type: String },
    eventBy : { type: Object },
    location: { type: String },
    city    : { type: String },
    contact : { type: String, default: "" },
    date    : { type: String, default: "" },
    picture : {
      type: String,
      default:
        "https://www.sleeptasticsolutions.com/wp-content/uploads/2018/05/happy-kids-1.jpg",
    },
    fees: { type: Number },
    comments:{type:Array ,default:[]},
    description:{ type: String, default: "" }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Event", eventSchema);
