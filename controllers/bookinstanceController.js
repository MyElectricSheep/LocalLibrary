const BookInstance = require('../database/models/bookinstance');

// Display list of all BookInstances.
exports.bookinstance_list = (req, res) => {
    // res.send('NOT IMPLEMENTED: BookInstance list');
    (async () => {
        try {
            const bookInstances = await 
                BookInstance
                    .find() // no need to pass {} as first argument here, since we're not making a projection
                    .populate('book')
            console.log(bookInstances)
            res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: bookInstances })
        } catch (err) {
            console.error(err)
        }
    })()
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};