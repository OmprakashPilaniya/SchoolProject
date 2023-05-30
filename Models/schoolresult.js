const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchoolSchema = new Schema({
    name: String,
    rollno: String,
    class: String,
    maths: String,
    english: String,
    science: String,
    hindi: String,
    total: String,
    status: String,
    social_science: String,
});

exports.Schoolresult = mongoose.model('Schoolresult', SchoolSchema);