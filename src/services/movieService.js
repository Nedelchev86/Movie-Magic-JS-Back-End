const Movie = require("../models/Movies");

exports.create = async (movieData) => {
    const result = await Movie.create(movieData);
    console.log(result);
    return result;
};

exports.getAll = (movieData) => {
    const movies = Movie.find();
    return movies;
};
