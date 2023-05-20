const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MoviesSchema = new Schema({
    nama: {type: String, required: true, max: 70},
    genre: {type: String, required: true},
    years: {type: String, required: true},
    runtime: {type: String, required: true},
    description: {type: String, required: true},
    viewrs: {type: String, required: true},
    poster: {type: String, required: true},
    video: {type: String, required: true},
    // likes_video: {type: String, required: true},
    // views_video: {type: String, required: true},
    }, { timestamps: true });

module.exports = mongoose.model('Movies', MoviesSchema);