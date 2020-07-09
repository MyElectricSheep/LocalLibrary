const Genre = require('../database/models/genre');
const Book = require('../database/models/book')

// Display list of all Genre.
exports.genre_list = (req, res) => {
    // res.send('NOT IMPLEMENTED: Genre list');
    (async () => {
        try {
            const allGenres = await Genre
                .find()
                .sort({ name: 'asc'})
            console.log(allGenres)
            res.render('genre_list', { title: "Genres list", genre_list: allGenres })
        } catch(err) {
            console.log(err)
        }
    })()
};

// Display detail page for a specific Genre.
exports.genre_detail = (req, res, next) => {
    // res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
    // Not needed here: convert req.params.id to proper mongoose ObjectId
    // const mongoose = require('mongoose');
    // const id = mongoose.Types.ObjectId(req.params.id);
    (async () => {
        try {
            // const genre = await Genre.find({ _id: req.params.id })
            // or findById
            const genre = await Genre.findById(req.params.id)
            const genre_books = await Book.find({genre : {$in: [req.params.id]}})
            console.log(genre)
            if (!genre) { // No results
                var err = new Error('Genre not found');
                err.status = 404;
                return next(err);
            }
            else res.render('genre_detail', { title: "Genre Detail", genre, genre_books })
        } catch (err) {
            next(err)
        }
    })()
};

// Display Genre create form on GET.
exports.genre_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET.
exports.genre_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update POST');
};