const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdmissionSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
});

exports.user = mongoose.model('Admission', AdmissionSchema);