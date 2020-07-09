const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://local-library-user:local-library-password2@library-3fq1r.mongodb.net/local_library?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {useNewUrlParser: true});

const db = mongoose.connection

db.on('error', err => {
  logError(err);
});

module.exports = db