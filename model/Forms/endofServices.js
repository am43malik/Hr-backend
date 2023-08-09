import mongoose from "mongoose";

const Schema = mongoose.Schema;

const endofServicesSchema = new Schema(
  {
    //-----------endofServicesSchema---------------------
    name: { type: String, require: true },
    startDate: { type: Date, require: true },
    lastDate: { type: Date, require: true },
    employeeNumber: { type: Number, require: true },
    lastWorkingDay: { type: String, require: true },
    dateOfJoining: { type: Date, require: true },
    resumingVacation: { type: Number, require: true },
    other: { type: String, require: true },
    //---------------Prepared-----------------------
    preparedName: { type: String, require: true },
    preparedDate: { type: Date, require: true },
    //-----------------HR--------------------
    hrName: { type: String, require: true },
    hrDate: { type: Date, require: true },
    //--------------------Diretor------------------
    diretorName: { type: String, require: true },
    diretorDate: { type: Date, require: true },

    //    position: { type: String, require: true },
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
  "EndofService",
  endofServicesSchema,
  "endofServices"
);
