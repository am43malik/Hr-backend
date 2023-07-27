import multer from "multer";
import NewEmployee from "../../model/Forms/newEmployee";
import fs from "fs";
import path from "path";
import Joi from "joi";

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

const newEmployeeController = {
  //-----------------CreateAPi-------------------------------------
  async newemployee(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      let filePath = req.file.path;

      const EmployeeSchema = Joi.object({
        name: Joi.string().required(),
        dateOfBrith: Joi.date().required(),
        dateOfJoining: Joi.date().required(),
        mobileNumber: Joi.number().required(),
        maritalStatus: Joi.string().required(),
        nationality: Joi.string().required(),
        qid: Joi.number().required(),
        position: Joi.string().required(),
        passportNumber: Joi.number().required(),
        dateOfIssue: Joi.date().required(),
        placeofissue: Joi.string().required(),
        dateOfExpiry: Joi.date().required(),
        bloodGroup: Joi.string().required(),
        employeeNumber: Joi.number().required(),
        position: Joi.string().required(),
        //  avatar: Joi.string().required(),
      });

      const { error } = EmployeeSchema.validate(req.body);

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
        dateOfBrith,
        dateOfJoining,
        mobileNumber,
        maritalStatus,
        nationality,
        qid,
        position,
        passportNumber,
        dateOfIssue,
        placeofissue,
        dateOfExpiry,
        bloodGroup,
        employeeNumber,
        avatar,
      } = req.body;

      let newEmployee;
      try {
        newEmployee = await NewEmployee.create({
          name,
          dateOfBrith,
          dateOfJoining,
          mobileNumber,
          maritalStatus,
          nationality,
          qid,
          position,
          passportNumber,
          dateOfIssue,
          placeofissue,
          dateOfExpiry,
          bloodGroup,
          employeeNumber,
          avatar: filePath,
        });
      } catch (error) {
        return next(error);
      }

      res.status(201).json({ newEmployee: newEmployee });
    });
  },
  //--------------------updateApi----------------------------
  async updateEmployee(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      let filePath;
      if (filePath) {
        filePath = req.file.path;
      }

      const EmployeeSchema = Joi.object({
        name: Joi.string().required(),
        dateOfBrith: Joi.date().required(),
        dateOfJoining: Joi.date().required(),
        mobileNumber: Joi.number().required(),
        maritalStatus: Joi.string().required(),
        nationality: Joi.string().required(),
        qid: Joi.number().required(),
        position: Joi.string().required(),
        passportNumber: Joi.number().required(),
        dateOfIssue: Joi.date().required(),
        placeofissue: Joi.string().required(),
        dateOfExpiry: Joi.date().required(),
        bloodGroup: Joi.string().required(),
        employeeNumber: Joi.number().required(),
        position: Joi.string().required(),
        avatar: Joi.string(),
      });

      const { error } = EmployeeSchema.validate(req.body);
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
        dateOfBrith,
        dateOfJoining,
        mobileNumber,
        maritalStatus,
        nationality,
        qid,
        position,
        passportNumber,
        dateOfIssue,
        placeofissue,
        dateOfExpiry,
        bloodGroup,
        employeeNumber,
        avatar,
      } = req.body;

      let updateEmployee;
      try {
        updateEmployee = await NewEmployee.findOneAndUpdate(
          { _id: req.params.id },
          {
            name,
            dateOfBrith,
            dateOfJoining,
            mobileNumber,
            maritalStatus,
            nationality,
            qid,
            position,
            passportNumber,
            dateOfIssue,
            placeofissue,
            dateOfExpiry,
            bloodGroup,
            employeeNumber,
            avatar: filePath,
          },
          { new: true }
        );
      } catch (error) {
        return next(error);
      }

      res.status(201).json({ updateEmployee: updateEmployee });
    });
  },

  //----------------------Delete Api--------------------------
  async deleteEmployee(req, res, next) {
    let deleteEmploye;
    try {
      deleteEmploye = await NewEmployee.findOneAndRemove({
        _id: req.params.id,
      });
      if (!deleteEmploye) {
        return next(Error("Noting to delete."));
      }
      const avatarpath = deleteEmploye.avatar;

      fs.unlink(`${appRoot}/${avatarpath}`, (err) => {
        if (err) {
          return next(err);
        }
      });
    } catch (error) {
      return next(error);
    }

    res.json({ deleteEmploye: deleteEmploye });
  },
  //---------------------All Employee API -------------------------
  async allEmployee(req, res, next) {
    let allEmployee;
    try {
      allEmployee = await NewEmployee.find({})
        .select("-__V -updatedAt")
        .sort({ _id: -1 });
    } catch (error) {
      return next(error);
    }

    res.json({ allEmployee: allEmployee });
  },
  async oneEmployee(req, res, next) {
    let oneEmployee;
    try {
      oneEmployee = await NewEmployee.findOne({})
        .select("-__V -updatedAt")
        .sort({ _id: -1 });
    } catch (error) {
      return next(error);
    }

    res.json({ oneEmployee: oneEmployee });
  },
  
};

export default newEmployeeController;
