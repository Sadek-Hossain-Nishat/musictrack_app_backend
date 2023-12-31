const MusicTrack = require("../models/musicTrack");

const createMusicTrack = (req, res, next) => {
  let musicTrack = new MusicTrack({
    title: req.body.title,
    artist: req.body.artist,
    imgUrl: req.body.imgUrl,
    musicUrl: req.body.musicUrl,
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
  // MusicTrack.index({ title: "text" });
  // Create a query that searches for the string title
  const query = { $text: { $search: title } };

  MusicTrack.find(query)
    .then((response) => {
      if (response.length == 0) {
        MusicTrack.find({ title: { $gte: title } })
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
      }
      if (response.length >= 1) {
        res.json({
          response,
          length: response.length,
        });
      }
    })
    .catch((error) => {
      res.json({
        error,
      });
    });

  // MusicTrack.find({ title: { $gte: title } })
  //   .then((response) => {
  //     res.json({
  //       response,
  //     });
  //   })
  //   .catch((error) => {
  //     res.json({
  //       error,
  //     });
  //   });
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
