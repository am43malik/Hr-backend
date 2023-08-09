import mongoose from "mongoose";


const Schema = mongoose.Schema;

const rprenewalformSchema = new Schema({
    //-----------NewEmployeeInfo---------------------
    name: { type: String, require: true },
    date: { type: Date, require: true },
    position: { type: String, require: true },
    refNo: { type: Number, require: true,  },
    Division: { type: String, require: true },
    passportNumber: { type: Number, require: true },
    to: { type: Date, require: true },


    //--------- ------new visa---------------------------------
    newVisaRequested: { type: String, require: true },
    newVisaApproved: { type: String, require: true },
    newVisaAccounts: { type: String, require: true },


    //----------------Business Visa--------------------
    BusinessVisaRequested: { type: String, require: true },
    BusinessVisaApproved: { type: String, require: true },
    BusinessVisaAccounts: { type: String, require: true },


    //---------------Visa Transfer--------------------
    TransferVisaRequested: { type: String, require: true },
    TransferVisaApproved: { type: String, require: true },
    TransferVisaAccounts: { type: String, require: true },

    //---------------New RP--------------------
    NewRPRequested: { type: String, require: true },
    NewRPVisaApproved: { type: String, require: true },
    NewRPVisaAccounts: { type: String, require: true },


    //---------------RPRenewal--------------------
    RPRenewalRequested: { type: String, require: true },
    RPRenewalApproved: { type: String, require: true },
    RPRenewalAccounts: { type: String, require: true },


    //---------------Exit Permit--------------------
    exitPermitRequested: { type: String, require: true },
    exitPermitApproved: { type: String, require: true },
    exitPermitAccounts: { type: String, require: true },


    //---------------Others--------------------
    OthersRequested: { type: String, require: true },
    OthersApproved: { type: String, require: true },
    OthersAccounts: { type: String, require: true },



},{timestamps:true, toJSON:{getters:true}})

export default mongoose.model( "Rprenewalform",rprenewalformSchema,"rprenewalforms")