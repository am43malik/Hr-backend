import mongoose from "mongoose";

const Schema = mongoose.Schema;

const exitofLeaveSchema = new Schema(
  {
    //-----------endofServicesSchema---------------------
     name: { type: String, require: true },
     date: { type: Date, require: true },
     position: { type: String, require: true },
     qid: { type: Number, require: true,  },
     passportNumber: { type: Number, require: true },
     leaveType: { type: String, require: true },
     numberOfDayLeave: { type: Number, require: true },
     leaveStartDate: { type: Date, require: true },
     leaveEndDate: { type: Date, require: true },
     departureDate: { type: Date, require: true },
     arrivalDate: { type: Date, require: true },
     lastLeaveDate: { type: Date, require: true },
     numberOfLastLeave: { type: Date, require: true },
     bankLoan: { type: String, require: true },
     personalLoan: { type: String, require: true },
     creditLoan: { type: String, require: true },
     companyAssets: { type: String, require: true },
     companySimCard: { type: String, require: true },
     companyLaptop: { type: String, require: true },
     tools: { type: String, require: true },
     comment: { type: String, require: true },
    avatar: {
      type: String,
      require: true,
      get: (avatar) => {
        return `${process.env.APP_URL}/${avatar}`;
      },
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

export default mongoose.model(
  "ExitofLeave",
  exitofLeaveSchema,
  "ExitofLeaves"
);