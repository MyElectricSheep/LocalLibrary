const Book = require('../database/models/book');
const Author = require('../database/models/author');
const BookInstance = require('../database/models/bookinstance');
const Genre = require('../database/models/genre');
// const async = require('async')

exports.index = (req, res) => {
    
    // Official approach:
    // async.parallel({
    //     book_count: function(callback) {
    //         Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
    //     },
    //     book_instance_count: function(callback) {
    //         BookInstance.countDocuments({}, callback);
    //     },
    //     book_instance_available_count: function(callback) {
    //         BookInstance.countDocuments({status:'Available'}, callback);
    //     },
    //     author_count: function(callback) {
    //         Author.countDocuments({}, callback);
    //     },
    //     genre_count: function(callback) {
    //         Genre.countDocuments({}, callback);
    //     }
    // }, function(err, results) {
    //     if (err) res.status(404).send(err)
    //     res.render('index', { title: 'Local Library Home', error: err, data: results });
    // });

    // My approach:
    (async () => {
        try {
            const results = {
                book_count: await Book.countDocuments(),
                book_instance_count: await BookInstance.countDocuments(),
                book_instance_available_count: await BookInstance.countDocuments({status:'Available'}),
                author_count: await Author.countDocuments(),
                genre_count: await Genre.countDocuments()
            }
            console.log(results)
            res.render('index', { title: 'Local Library Home', data: results });
        } catch (err) {
            console.error(err)
        }
    })()
    
    // res.send('NOT IMPLEMENTED: Site Home Page');

};

// Display list of all books.
exports.book_list = (req, res) => {
    // res.send('NOT IMPLEMENTED: Book list');
    (async () => {
        try {
            const books = await Book
                .find({}, {title: 1, author: 1}) // need to pass empty {} as first argument here, as we're making a projection next
                .populate('author')
            res.render('book_list', { title: 'Books List', book_list: books });
        } catch(err) {
            console.error(err)
        }
    })()
};

// Display detail page for a specific book.
exports.book_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update POST');
};