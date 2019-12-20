var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoursesSchema = Schema({
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    keterangan: {
        type: String
        required: true
    }
});

var courses = module.exports = mongoose.model('courses', CoursesSchema);