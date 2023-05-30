const mongoose = require('mongoose');
const { Schema } = mongoose;

const StaffSchema = new Schema({
    name: String,
    Subject: String,
    Experience: String,
    image: String,
    Qualification: String,

});

exports.Staffs = mongoose.model('Staff', StaffSchema);