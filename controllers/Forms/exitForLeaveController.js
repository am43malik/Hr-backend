import multer from "multer";
import fs from "fs";
import path from "path";
import Joi from "joi";
import ExitofLeave from "../../model/Forms/exitofLeave";

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

const exitForLeaveController = {
  //-----------------CreateAPi-------------------------------------
  async exitofleave(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      let filePath = req.file.path;

      const exitForLeaveSchema = Joi.object({
        name: Joi.string().required(),
        date: Joi.date().required(),
        qid: Joi.number().required(),
        position: Joi.string().required(),
        passportNumber: Joi.number().required(),
        leaveType: Joi.string().required(),
        numberOfDayLeave: Joi.number().required(),
        leaveStartDate: Joi.date().required(),
        leaveEndDate: Joi.date().required(),
        departureDate: Joi.date().required(),
        arrivalDate: Joi.date().required(),
        lastLeaveDate: Joi.date().required(),
        numberOfLastLeave: Joi.number().required(),
        bankLoan: Joi.string().required(),
        personalLoan: Joi.string().required(),
        creditLoan: Joi.string().required(),
        companyAssets: Joi.string().required(),
        companySimCard: Joi.string().required(),
        companyLaptop: Joi.string().required(),
        tools: Joi.string().required(),
        comment: Joi.string().required(),

        //  avatar: Joi.string().required(),
      });

      const { error } = exitForLeaveSchema.validate(req.body);

      if (error) {
        fs.unlink(`${appRoot}/${filePath}`, (err) => {
          if (err) {
            return next(error);
          }
        });

        return next(error);
      }

      const {
        name,
        date,
        position,
        qid,
        passportNumber,
        leaveType,
        numberOfDayLeave,
        leaveStartDate,
        leaveEndDate,
        departureDate,
        arrivalDate,
        lastLeaveDate,
        numberOfLastLeave,
        bankLoan,
        personalLoan,
        creditLoan,
        companyAssets,
        companySimCard,
        companyLaptop,
        tools,
        comment,
        avatar,
      } = req.body;

      let exitofleave;
      try {
        exitofleave = await ExitofLeave.create({
          name,
          date,
          position,
          qid,
          passportNumber,
          leaveType,
          numberOfDayLeave,
          leaveStartDate,
          leaveEndDate,
          departureDate,
          arrivalDate,
          lastLeaveDate,
          numberOfLastLeave,
          bankLoan,
          personalLoan,
          creditLoan,
          companyAssets,
          companySimCard,
          companyLaptop,
          tools,
          comment,

          avatar: filePath,
        });
      } catch (error) {
        return next(error);
      }

      res.status(201).json({ exitofleave: exitofleave });
    });
  },
  //--------------------updateApi----------------------------
  async updateExitofleave(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      let filePath;
      if (filePath) {
        filePath = req.file.path;
      }

      const exitForLeaveSchema = Joi.object({
        name: Joi.string().required(),
        date: Joi.date().required(),
        qid: Joi.number().required(),
        position: Joi.string().required(),
        passportNumber: Joi.number().required(),
        leaveType: Joi.string().required(),
        numberOfDayLeave: Joi.number().required(),
        leaveStartDate: Joi.date().required(),
        leaveEndDate: Joi.date().required(),
        departureDate: Joi.date().required(),
        arrivalDate: Joi.date().required(),
        lastLeaveDate: Joi.date().required(),
        numberOfLastLeave: Joi.number().required(),
        bankLoan: Joi.string().required(),
        personalLoan: Joi.string().required(),
        creditLoan: Joi.string().required(),
        companyAssets: Joi.string().required(),
        companySimCard: Joi.string().required(),
        companyLaptop: Joi.string().required(),
        tools: Joi.string().required(),
        comment: Joi.string().required(),
        avatar: Joi.string(),
      });

      const { error } = exitForLeaveSchema.validate(req.body);
      if (filePath) {
        if (error) {
          fs.unlink(`${appRoot}/${filePath}`, (err) => {
            if (err) {
              return next(error);
            }
          });

          return next(error);
        }
      }

      const {
        name,
        date,
        position,
        qid,
        passportNumber,
        leaveType,
        numberOfDayLeave,
        leaveStartDate,
        leaveEndDate,
        departureDate,
        arrivalDate,
        lastLeaveDate,
        numberOfLastLeave,
        bankLoan,
        personalLoan,
        creditLoan,
        companyAssets,
        companySimCard,
        companyLaptop,
        tools,
        comment,
        avatar,
      } = req.body;

      let updateExitofleave;
      try {
        updateExitofleave = await ExitofLeave.findOneAndUpdate(
          { _id: req.params.id },
          {
            name,
            date,
            position,
            qid,
            passportNumber,
            leaveType,
            numberOfDayLeave,
            leaveStartDate,
            leaveEndDate,
            departureDate,
            arrivalDate,
            lastLeaveDate,
            numberOfLastLeave,
            bankLoan,
            personalLoan,
            creditLoan,
            companyAssets,
            companySimCard,
            companyLaptop,
            tools,
            comment,

            avatar: filePath,
          },
          { new: true }
        );
      } catch (error) {
        return next(error);
      }

      res.status(201).json({ updateExitofleave: updateExitofleave });
    });
  },

  //----------------------Delete Api--------------------------
  async deleteExitofleave(req, res, next) {
    let deleteExitofleave;
    try {
        deleteExitofleave = await ExitofLeave.findOneAndRemove({
        _id: req.params.id,
      });
      if (!deleteEmploye) {
        return next(Error("Noting to delete."));
      }
      const avatarpath = deleteExitofleave.avatar;

      fs.unlink(`${appRoot}/${avatarpath}`, (err) => {
        if (err) {
          return next(err);
        }
      });
    } catch (error) {
      return next(error);
    }

    res.json({ deleteExitofleave: deleteExitofleave });
  },
  //---------------------All Employee API -------------------------
  async allExitofleave(req, res, next) {
    let allExitofleave;
    try {
        allExitofleave = await ExitofLeave.find({})
        .select("-__V -updatedAt")
        .sort({ _id: -1 });
    } catch (error) {
      return next(error);
    }

    res.json({ allExitofleave: allExitofleave });
  },
  //----------------one employee------------------------
  async oneExitofleave(req, res, next) {
    let oneExitofleave;
    try {
        oneExitofleave = await ExitofLeave.findOne({})
        .select("-__V -updatedAt")
        .sort({ _id: -1 });
    } catch (error) {
      return next(error);
    }

    res.json({ oneExitofleave: oneExitofleave });
  },
};

export default exitForLeaveController;
