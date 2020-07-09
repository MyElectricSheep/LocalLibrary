const mongoose = require('mongoose')
const moment = require('moment')

const Schema = mongoose.Schema

const bookInstanceSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
    imprint: { type: String, required: true },
    status: {  type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: { type: Date, default: Date.now },
})

bookInstanceSchema.virtual('url').get((value, virtual, doc) => {
    return `/catalog/bookinstance/${doc._id}`
})

bookInstanceSchema.virtual('due_back_formatted').get((value, virtual, doc) => {
  return moment(doc.due_back).format('MMMM Do, YYYY');
});

const BookInstance = mongoose.model('BookInstance', bookInstanceSchema)

module.exports = BookInstance