const mongoose = require("mongoose");
const { Schema } = mongoose;

const musicTrackSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    artist: {
      type: String,
      require: true,
    },
    imgUrl: {
      type: String,
      require: true,
    },
    musicUrl: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

musicTrackSchema.index({ title: "text" });
module.exports = mongoose.model("MusicTrack", musicTrackSchema);
