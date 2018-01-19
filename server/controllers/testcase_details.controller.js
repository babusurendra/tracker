// Test case details related controller functions will be here
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var test_case_schem = new Schema({
        "project" : String,
        "module" : String,
        "testcase_title" : String,
        "test_case_status" : String,
        "assigned_to" : Number
})



//module.exports = mongoose.model('cars', carSchema);
var test_case_details_model = mongoose.model('test_cases',test_case_schem,"test_cases_status");
var testcasecontrollers = {
    getUserAssignedTestCases : (req,res)=>{
        var user_id = req.params.user_id;
        test_case_details_model.find({assigned_to:user_id,},(error,data)=>{
            if(error) {
                res.json({
                    "status":500,
                    "message":"Error while retriving document"
                });
            }
            res.json({
            "staus":200,
            "Data" : data    
            });
        })
    },
    
}
module.exports = testcasecontrollers;