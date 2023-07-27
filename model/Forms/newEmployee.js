import mongoose from "mongoose";


const Schema = mongoose.Schema;

const newEmployeeSchema = new Schema({
    //-----------NewEmployeeInfo---------------------
    name: { type: String, require: true },
    dateOfBrith: { type: Date, require: true },
   dateOfJoining: { type: Date, require: true },
   mobileNumber: { type: Number, require: true },
   maritalStatus: { type: String, require: true },
   nationality: { type: String, require: true },
   qid: { type: Number, require: true,  },
   position: { type: String, require: true },
   //---------------Passpord-----------------------
   passportNumber: { type: Number, require: true },
   dateOfIssue: { type: Date, require: true },
   placeofissue: { type: String, require: true },
   dateOfExpiry: { type: Date, require: true },
   //-------------persnol info--------------------
   bloodGroup: { type: String, require: true },
   employeeNumber: { type: Number, require: true },
//    position: { type: String, require: true },
avatar: { type: String, require: true ,get :(avatar)=> {return `${ process.env.APP_URL}/${avatar}`}},

},{timestamps:true, toJSON:{getters:true}})

export default mongoose.model( "NewEmployee",newEmployeeSchema,"newEmployees")