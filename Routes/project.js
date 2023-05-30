const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project')

router.get('/home', projectController.getHomePage)
    .get('/program_feeStructure', projectController.getProgramPage)
    .get('/schoolResult', projectController.getResultPage)
    .get('/SchoolResultOutput', projectController.getSchoolResult)
    .get('/collageresult', projectController.getCollageResultPage)
    .get('/collageresultOutput', projectController.getCollageResultOutput)
    .get('/staff', projectController.getStaffPage)
    .get('/Admissions', projectController.getRagistrationPage)
    .post('/admissionsubmit', projectController.AdmissionDetails);
exports.router = router;