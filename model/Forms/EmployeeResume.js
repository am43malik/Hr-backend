import mongoose from "mongoose";

const Schema = mongoose.Schema;


const employeeResumeSchema = new Schema({

    name :{ type:String, require:true},
    leaveStartDate:{ type:Date, require:true},
    leaveEndtDate:{ type:Date, require:true},
    company:{ type:String, require:true},
    employeeNo:{ type:Number, require:true},
    nationality:{ type:String, require:true},
    resumeOfWorkDate:{ type:Date, require:true},
    comment:{ type:String, require:true},

},{timestamps:true, toJSON:{getters:true}})


export default mongoose.model('EmployeeResume',employeeResumeSchema,'employeeresumes')