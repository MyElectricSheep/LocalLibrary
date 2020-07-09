const Author = require('../database/models/author')

exports.author_list = (req, res) => {
    // res.send('To implement: List all authors')
    (async () => {
        try {
            const authorList = await 
                Author
                    .find()
                    .populate('author') // not needed ?
                    .sort([['family_name', 'ascending']])
            res.render('author_list', { title: "Authors list", author_list: authorList })
        } catch(err) {
            console.error(err)
        }
    })()
}

exports.author_detail = (req, res) => {
    res.send('To implement: info about a specific author with id: ' + req.params.id)
}

exports.author_create_get = (req, res) => {
    res.send('To implement: send author create form info')
}

exports.author_create_post = (req, res) => {
    res.send('To implement: handle author creation')
}

exports.author_delete_get = (req, res) => {
    res.send('To implement: send author delete form info')
}

exports.author_delete_post = (req, res) => {
    res.send('To implemente: handle author deletion')
}

exports.author_update_get = (req, res) => {
    res.send('To implement: send author update form info')
}

exports.author_update_post = (req, res) => {
    res.send('To implement: handle author update')
}