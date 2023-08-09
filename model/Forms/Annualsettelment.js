import mongoose from "mongoose";

const Schema = mongoose.Schema;

const annualsettelmentSchema = new Schema(
  {
    //-----------endofServicesSchema---------------------
    name: { type: String, require: true },
    subject: { type: String, require: true },
    date: { type: Date, require: true },
    employeeNumber: { type: Number, require: true },
    to: { type: String, require: true },
    from: { type: String, require: true },
    vacationStartDate: { type: Date, require: true },
    joiningDate: { type: Date, require: true },
    resumingVacation: { type: Number, require: true },

    //---------------Prepared-----------------------
    preparedName: { type: String, require: true },
    preparedDate: { type: Date, require: true },
    //-----------------HR--------------------
    hrName: { type: String, require: true },
    hrDate: { type: Date, require: true },
    //--------------------Diretor------------------
    diretorName: { type: String, require: true },
    diretorDate: { type: Date, require: true },
  },
  { timestamps: true, toJSON: { getters: true } }
);

export default mongoose.model(
  "Annualsettelment",
  annualsettelmentSchema,
  "annualsettelments"
);
