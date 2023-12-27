const MusicTrack = require("../models/musicTrack");

const createMusicTrack = (req, res, next) => {
  let musicTrack = new MusicTrack({
    title: req.body.title,
    artist: req.body.artist,
    imgUrl: req.body.imgUrl,
    musicUrl: req.body.imgUrl,
  });

  musicTrack
    .save()
    .then((musicTrack) => {
      res.json({
        message: "MusicTrack Added Successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: `${error}`,
      });
    });
};

const getAllMusicTrack = (req, res, next) => {
  MusicTrack.find()
    .then((data) => {
      res.json({
        data,
        length: data.length,
      });
    })
    .catch((error) => {
      res.json({
        message: `${error}`,
      });
    });
};

const getMusicbyKeyword = (req, res, next) => {
  let title = req.params.title;
  console.log("params =>", req.params);
  console.log("title=>", title);
  MusicTrack.find({ title: { $lte: title } })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        error,
      });
    });
};

const getMusicbyTitle = (req, res, next) => {
  let title = req.params.title;
  console.log("params =>", req.params);
  console.log("title=>", title);
  MusicTrack.findOne({ title: title })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        error,
      });
    });
};

module.exports = {
  createMusicTrack,
  getAllMusicTrack,
  getMusicbyKeyword,
  getMusicbyTitle,
};
