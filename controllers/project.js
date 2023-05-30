const ejs = require('ejs');
const path = require('path');
const express = require('express');
const schoolmodel = require('../Models/schoolresult.js');
const collagemodel = require('../Models/collageresult.js');
const staffmodel = require('../Models/staff.js')
const admissionmodel = require('../Models/Admission.js');
const schoolResult = schoolmodel.Schoolresult;
const collageResult = collagemodel.Collageresult;
const staffs = staffmodel.Staffs;
const User = admissionmodel.user;
const app = express();

exports.getHomePage = (req, res) => {

   res.render('../Views/index.ejs');
   //   console.log(products)
};
exports.getProgramPage = (req, res) => {

   res.render('../Views/programs.ejs');
}
exports.getResultPage = (req, res) => {
   res.render('../Views/result.ejs');
}
exports.getSchoolResult = async (req, res) => {
   const rollno = req.query.rollno;
   const result = await schoolResult.findOne({ rollno: rollno })
   if (!result) {
      res.status(401).json({ message: "Enter Correct RollNumber" })
   }
   else {
      ejs.renderFile(path.resolve(__dirname, '../Views/resultoutput.ejs'), { result: result }, function (err, str) {
         res.send(str);
      })
   }
}
exports.getCollageResultPage = (req, res) => {
   res.render('../Views/collageresult.ejs')
}

exports.getCollageResultOutput = async (req, res) => {
   const rollno = req.query.rollno;
   const result = await collageResult.findOne({ rollno: rollno })
   if (!result) {
      res.status(401).json({ message: "Enter Correct RollNumber" })
   }
   else {
      ejs.renderFile(path.resolve(__dirname, '../Views/collageresultoutput.ejs'), { result: result }, function (err, str) {
         res.send(str);
      })
   }
}

exports.getStaffPage = async (req, res) => {
   const result = await staffs.find();
   ejs.renderFile(path.resolve(__dirname, '../Views/teacher.ejs'), { result: result }, function (err, str) {
      res.send(str);
   })
}

exports.getRagistrationPage = (req, res) => {
   res.render('../Views/ragistration.ejs')
}

exports.AdmissionDetails = async (req, res) => {
   let user;
   try {
      user = new User(req.body);
      user.email = req.body.email;
      user.name = req.body.name;
      user.dob = req.body.dob;
      user.gender = req.body.gender;
      user.course = req.body.course;
   }
   catch (err) {
      console.log(err);
   }
   await user.save();
   res.render('../Views/ragistrationoutput.ejs')
}
