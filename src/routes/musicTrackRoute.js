const express = require("express");
const MusicTrackController = require("../controllers/musicTrackController");

const musicTrackRouter = express.Router();

musicTrackRouter.post("/musictracks", MusicTrackController.createMusicTrack);
musicTrackRouter.get("/musictracks", MusicTrackController.getAllMusicTrack);
musicTrackRouter.get(
  "/musictracks/key/:title",
  MusicTrackController.getMusicbyKeyword
);
musicTrackRouter.get(
  "/musictracks/:title",
  MusicTrackController.getMusicbyTitle
);

module.exports = musicTrackRouter;
