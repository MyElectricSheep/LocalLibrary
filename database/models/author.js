const mongoose = require('mongoose')
const moment = require('moment')

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
})

// https://mongoosejs.com/docs/api/virtualtype.html
authorSchema.virtual('fullName').get((value, virtual, doc) => {
    let fullName = ''
    if (doc.first_name && doc.family_name) {
        fullName = doc.first_name + ' ' + doc.family_name
    }
    return fullName;
  });

authorSchema.virtual('lifespan').get((value, virtual, doc) => {
    let lifespan
    if (doc.date_of_birth && doc.date_of_death) {
        lifespan = doc.date_of_death.getYear() - doc.date_of_birth.getYear()
    }
    // return Boolean(doc.date_of_death)
    return typeof lifespan === 'number' ? `Lived for ${lifespan} years` : ''
})

authorSchema.virtual('dob').get((value, virtual, doc) => {
    return doc.date_of_birth ? moment(doc.date_of_birth).format('MMMM Do, YYYY') : ''
})

authorSchema.virtual('dod').get((value, virtual, doc) => {
    return doc.date_of_death ?  moment(doc.date_of_death).format('MMMM Do, YYYY') : ''
})

authorSchema.virtual('url').get((value, virtual, doc) => {
    return `/catalog/author/${doc._id}`
})

const Author = mongoose.model('Author', authorSchema);

module.exports = Author