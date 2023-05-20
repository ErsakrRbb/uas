const Movies = require('../model/movies');
const moment = require('moment');

exports.index = async function (req, res) {
    let movies = await Movies.find()
    return res.render("../views/index", {movies})
};
exports.tambah = async function (req, res) {
    return res.render("../views/tambah")
};
exports.store = function (req, res) {
    let movies = new Movies({
        nama: req.body.nama,
        genre: req.body.genre,
        years: req.body.years,
        runtime: req.body.runtime,
        description: req.body.description,
        viewrs: req.body.viewrs,
        poster: req.body.poster,
        video: req.body.video,
         });
    movies.save().then(data => {
        res.redirect('/movies')
    }).catch(err => console.log(err))
};
exports.movies_details = async function (req, res) {
    let movies = await Movies.findById(req.params.id)
    return res.render("../views/edit", {movies})
};
exports.update = function (req, res) {
    Movies.findByIdAndUpdate(req.params.id, {$set: req.body}).then(data => res.redirect('/movies')).catch(err => console.log(err))
};
exports.destroy = function (req, res) {
    Movies.findByIdAndRemove(req.params.id).then(data =>  res.redirect('/movies')).catch(err => console.log(err))
};