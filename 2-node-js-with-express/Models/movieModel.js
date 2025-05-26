const mongoose = require("mongoose");
const fs = require("fs");
const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required field"],
      //only used with String type Data
      maxlength: [100, "Movie name must not exceed 100 characters"],
      minlength: [4, "Movie name must contain at least 4 characters"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Name is required field"],
      trim: true,
    },
    duration: {
      type: Number,
      required: [true, "Duration is required field"],
    },
    ratings: {
      type: Number,
    //   min: [1, "Rating must be 1 or greater than 1"],
    //   max: [10, "Rating must be 10 or less"],
    validate:{
       validator: function(value){
            return value>=1 && value<=10
        },
        message:"Rating should be above 1 and below 10"
    },
      default: 1.0,
    },
    releaseyear: {
      type: Number,
      required: [true, "Duration is required field"],
    },
    releasedate: {
      type: Date,
      default: Date.now(),
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    genre: {
      type: [String],
      required: [true, "Genre is Required"],
    },
    directors: {
      type: [String],
      required: [true, "Director is Required"],
    },
    coverImage: {
      type: [String],
      required: [true, "Image is Necessary"],
    },
    Actors: {
      type: [String],
      required: [true, "Actors is Required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    createdBy: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
movieSchema.virtual("durationInHours").get(function () {
  return this.duration / 60;
});
//Executed when the Document is Saved in DB
//.save() or .create()
// movieSchema.pre("save", function (next) {
//   this.createdBy = "SUYASHSONI";
//   next();
// });
// movieSchema.post("save", function (doc, next) {
//   const content = `A new Movie Doc with name ${doc.name} has been created by ${doc.createdBy}\n`;

//   fs.writeFileSync("./Log/Log.txt", content, { flag: "a" }, (err) => {
//     console.log(err.message);
//   });
//   next();
// });

movieSchema.pre("find", function (next) {
  this.find({ releasedate: { $lte: Date.now() } });
  next();
});
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
