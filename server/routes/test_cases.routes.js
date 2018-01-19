// all test case related routes will be here
var express = require('express');
var router = express.Router(); 
var test_case_controller = require('../controllers/testcase_details.controller');
router.get('/status/:user_id',test_case_controller.getUserAssignedTestCases);
module.exports = router;