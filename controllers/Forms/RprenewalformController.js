import multer from "multer";
import fs from "fs";
import path from "path";
import Joi from "joi";
import EmployeeResume from "../../model/Forms/EmployeeResume";
import Rprenewalform from "../../model/Forms/Rprenewalform";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    // 3746674586-836534453.png
    cb(null, uniqueName);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single("avatar"); // 5mb

const RprenewalformController = {
  //-----------------CreateAPi-------------------------------------
  async Rprenewalform(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      let filePath = req.file.path;
// console.log(filePath,'llllllllllllllllllllll')
      const RprenewalformSchema = Joi.object({
        name: Joi.string().required(),
        date: Joi.date().required(),
        position: Joi.string().required(),
        refNo: Joi.number().required(),
        Division: Joi.string().required(),
        passportNumber: Joi.number().required(),
        to: Joi.date().required(),
        newVisaRequested: Joi.string().required(),
        newVisaApproved: Joi.string().required(),
        newVisaAccounts: Joi.string().required(),
        BusinessVisaRequested: Joi.string().required(),
        BusinessVisaApproved: Joi.string().required(),
        BusinessVisaAccounts: Joi.string().required(),
        TransferVisaRequested: Joi.string().required(),
        TransferVisaApproved: Joi.string().required(),
        TransferVisaAccounts: Joi.string().required(),
        NewRPRequested: Joi.string().required(),
        NewRPVisaApproved: Joi.string().required(),
        NewRPVisaAccounts: Joi.string().required(),
        RPRenewalRequested: Joi.string().required(),
        RPRenewalApproved: Joi.string().required(),
        RPRenewalAccounts: Joi.string().required(),
        exitPermitRequested: Joi.string().required(),
        exitPermitApproved: Joi.string().required(),
        exitPermitAccounts: Joi.string().required(),
        OthersRequested: Joi.string().required(),
        OthersApproved: Joi.string().required(),
        OthersAccounts: Joi.string().required(),
      });

      const { error } = RprenewalformSchema.validate(req.body);

      if (error) {
        fs.unlink(`${appRoot}/${filePath}`, (err) => {
          if (err) {
            return next(error);
          }
        });

        return next(error);
      }

      const {
        name ,
        date,
        position,
        refNo,
        Division,
        newVisaRequested,
        passportNumber,
        to,
        newVisaApproved,
        newVisaAccounts,
        BusinessVisaRequested,
        BusinessVisaApproved,
        BusinessVisaAccounts,
        TransferVisaRequested,
        TransferVisaApproved,
        TransferVisaAccounts,
        NewRPRequested,
        NewRPVisaApproved,
        NewRPVisaAccounts,
        RPRenewalRequested,
        RPRenewalApproved,
        RPRenewalAccounts,
        exitPermitRequested,
        exitPermitApproved,
        exitPermitAccounts,
        OthersRequested,
        OthersApproved,
        OthersAccounts,
      } = req.body;

      let Rprenewalform;
      try {
        Rprenewalform = await Rprenewalform.create({
          name ,
          date,
          position,
          refNo,
          Division,
          newVisaRequested,
          passportNumber,
          to,
          newVisaApproved,
          newVisaAccounts,
          BusinessVisaRequested,
          BusinessVisaApproved,
          BusinessVisaAccounts,
          TransferVisaRequested,
          TransferVisaApproved,
          TransferVisaAccounts,
          NewRPRequested,
          NewRPVisaApproved,
          NewRPVisaAccounts,
          RPRenewalRequested,
          RPRenewalApproved,
          RPRenewalAccounts,
          exitPermitRequested,
          exitPermitApproved,
          exitPermitAccounts,
          OthersRequested,
          OthersApproved,
          OthersAccounts,
        });
      } catch (error) {
        return next(error);
      }

      res.status(201).json({ Rprenewalform: Rprenewalform });
    });
  },
  //--------------------endos services.Api----------------------------
  async UpdateRprenewalform(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      let filePath;
      if (filePath) {
        filePath = req.file.path;
      }

      const UpdateRprenewalformSchema = Joi.object({
        name: Joi.string().required(),
        date: Joi.date().required(),
        position: Joi.string().required(),
        refNo: Joi.number().required(),
        Division: Joi.string().required(),
        passportNumber: Joi.number().required(),
        to: Joi.date().required(),
        newVisaRequested: Joi.string().required(),
        newVisaApproved: Joi.string().required(),
        newVisaAccounts: Joi.string().required(),
        BusinessVisaRequested: Joi.string().required(),
        BusinessVisaApproved: Joi.string().required(),
        BusinessVisaAccounts: Joi.string().required(),
        TransferVisaRequested: Joi.string().required(),
        TransferVisaApproved: Joi.string().required(),
        TransferVisaAccounts: Joi.string().required(),
        NewRPRequested: Joi.string().required(),
        NewRPVisaApproved: Joi.string().required(),
        NewRPVisaAccounts: Joi.string().required(),
        RPRenewalRequested: Joi.string().required(),
        RPRenewalApproved: Joi.string().required(),
        RPRenewalAccounts: Joi.string().required(),
        exitPermitRequested: Joi.string().required(),
        exitPermitApproved: Joi.string().required(),
        exitPermitAccounts: Joi.string().required(),
        OthersRequested: Joi.string().required(),
        OthersApproved: Joi.string().required(),
        OthersAccounts: Joi.string().required(),
        
       
      });


      const { error } = UpdateRprenewalformSchema.validate(req.body);
     
     
        if (error) {
          fs.unlink(`${appRoot}/${filePath}`, (err) => {
            if (err) {
              return next(error);
            }
          });

          return next(error);
        }
      

      const {
        name ,
        date,
        position,
        refNo,
        Division,
        newVisaRequested,
        passportNumber,
        to,
        newVisaApproved,
        newVisaAccounts,
        BusinessVisaRequested,
        BusinessVisaApproved,
        BusinessVisaAccounts,
        TransferVisaRequested,
        TransferVisaApproved,
        TransferVisaAccounts,
        NewRPRequested,
        NewRPVisaApproved,
        NewRPVisaAccounts,
        RPRenewalRequested,
        RPRenewalApproved,
        RPRenewalAccounts,
        exitPermitRequested,
        exitPermitApproved,
        exitPermitAccounts,
        OthersRequested,
        OthersApproved,
        OthersAccounts,
      } = req.body;

      let UpdateRprenewalform;
      try {
     

        UpdateRprenewalform = await Rprenewalform.findOneAndUpdate(
          { _id: req.params.id },
          {
            name ,
            date,
            position,
            refNo,
            Division,
            newVisaRequested,
            passportNumber,
            to,
            newVisaApproved,
            newVisaAccounts,
            BusinessVisaRequested,
            BusinessVisaApproved,
            BusinessVisaAccounts,
            TransferVisaRequested,
            TransferVisaApproved,
            TransferVisaAccounts,
            NewRPRequested,
            NewRPVisaApproved,
            NewRPVisaAccounts,
            RPRenewalRequested,
            RPRenewalApproved,
            RPRenewalAccounts,
            exitPermitRequested,
            exitPermitApproved,
            exitPermitAccounts,
            OthersRequested,
            OthersApproved,
            OthersAccounts,
          },
          { new: true }
        );
      } catch (error) {
        return next(error);
      }

      res.status(201).json({ UpdateRprenewalform: UpdateRprenewalform });
    });
  },

  //----------------------Delete Api--------------------------
  async deleteUpdateRprenewalform(req, res, next) {
    let deleteUpdateRprenewalform;
    try {
        deleteUpdateRprenewalform = await Rprenewalform.findOneAndRemove({
        _id: req.params.id,
      });
      if (!deleteUpdateRprenewalform) {
        return next(Error("Noting to delete."));
      }
      const avatarpath = deleteUpdateRprenewalform.avatar;

      fs.unlink(`${appRoot}/${avatarpath}`, (err) => {
        if (err) {
          return next(err);
        }
      });
    } catch (error) {
      return next(error);
    }

    res.json({ deleteUpdateRprenewalform: deleteUpdateRprenewalform });
  },
//   //---------------------All Employee API -------------------------
  async allRprenewalform(req, res, next) {
    let allRprenewalform;
    try {
        allRprenewalform = await Rprenewalform.find({})
        .select("-__V -updatedAt")
        .sort({ _id: -1 });
    } catch (error) {
      return next(error);
    }

    res.json({ allRprenewalform: allRprenewalform });
  },
  //----------------one employee------------------------
  async oneRprenewalform(req, res, next) {
    let oneRprenewalform;
    try {
        oneRprenewalform = await Rprenewalform.findOne({})
        .select("-__V -updatedAt")
        .sort({ _id: -1 });
    } catch (error) {
      return next(error);
    }

    res.json({ oneRprenewalform: oneRprenewalform });
  },
  
};

export default RprenewalformController;
