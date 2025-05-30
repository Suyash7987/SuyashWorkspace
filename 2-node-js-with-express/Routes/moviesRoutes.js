const express = require("express");
const moviesController = require("./../Controllers/moviesController");
const authController =require('./../Controllers/authController') 
const router = express.Router();
///7987185
router
  .route("/highest-rated")
  .get(moviesController.getHighestRated, moviesController.getAllMovies);

// router.route("/movies-stats").get(moviesController.getMovieStats);

router.route("/movie-genre/:genre").get(moviesController.getMovieByGenre);

router
  .route("/")
  .get( authController.protect,moviesController.getAllMovies)
  .post(moviesController.createMovie);

router
  .route("/:id")
  .get( authController.protect,moviesController.getMovie)
  .patch( authController.protect,authController.restrict('admin'), moviesController.updateMovie)
  .delete( authController.protect,authController.restrict('admin'), moviesController.deleteMovie);

module.exports = router;
