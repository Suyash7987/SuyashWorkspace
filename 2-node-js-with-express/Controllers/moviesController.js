const Movie = require("./../Models/movieModel");
const ApiFeatures = require("./../Utils/ApiFeatures");

exports.getHighestRated = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratings";
  next();
};

// exports.getAllMovies = async (req, res) => {
//     try{
//         const features = new ApiFeatures(Movie.find(), req.query)
//                                 .filter()
//                                 .sort()
//                                 .limitFields()
//                                 .paginate();
// // console.log('movies', features.query)
//         let movies = await features.query;

//         res.status(200).json({
//             status: 'success',
//             length: movies.length,
//             data: {
//                 movies
//             }
//         });
//     }catch(err){
//         res.status(404).json({
//             status: 'fail',
//             message: err.message
//         })
//     }

// }
exports.getAllMovies = async (req, res) => {
  try {
    const features = new ApiFeatures(Movie.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const movies = await features.query;

    res.status(200).json({
      status: "success",
      length: movies.length,
      data: {
        movies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    //const movie = await Movie.findOne({_id: req.params.id});
    const movie = await Movie.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        movie: updatedMovie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
      message: "Movie is deleted",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

// exports.getMovieStats = async (req, res) => {
//   try {
//     const stats = await Movie.aggregate([
    
//       {
//         $group: {
//           _id: "$releaseDate",
//           avgRating: { $avg: "$ratings" },
//           avgPrice: { $avg: "$price" },
//           minPrice: { $min: "$price" },
//           maxPrice: { $max: "$price" },
//           priceTotal: { $sum: "$price" },
//           movieCount: { $sum: 1 },
//         },
//       },
//       { $sort: { minPrice: 1 } },
//       //{ $match: {maxPrice: {$gte: 60}}}
//     ]);

//     res.status(200).json({
//       status: "success",
//       count: stats.length,
//       data: {
//         stats,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err.message,
//     });
//   }
// };

exports.getMovieByGenre = async (req, res) => {
  try {
    const genre = req.params.genre;

    const movies = await Movie.aggregate([
      { $unwind: "$genre" },
      {
        $group: {
          _id: "$genre",
          movieCount: { $sum: 1 },
          movies: { $push: "$name" },
        },
      },
      { $addFields: { genre: "$_id" } },
      { $project: { _id: 0 } },
      { $sort: { movieCount: -1 } },
      // {$limit:4}
      { $match: { genre: genre } },
    ]);
    
    if (movies.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: `No movies found for genre: ${genre}`,
      });
    }
    res.status(200).json({
      status: "success",
      count: movies.length,
      data: {
        movies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Failed",
      message: err.message,
    });
  }
};
