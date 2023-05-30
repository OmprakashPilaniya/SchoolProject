const mongoose = require('mongoose');
const { Schema } = mongoose;

const CollageSchema = new Schema({
    name: String,
    rollno: String,
    stream: String,
    Semester: String,
    maths: String,
    physics: String,
    chemistry: String,
    total: String,
    status: String,
});

exports.Collageresult = mongoose.model('Collageresult', CollageSchema);