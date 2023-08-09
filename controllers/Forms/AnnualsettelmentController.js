import multer from "multer";
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

const AnnualsettelmentController = {
  //-----------------CreateAPi-------------------------------------
  async Annualsettelment(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      let filePath = req.file.path;
console.log(filePath,'llllllllllllllllllllll')
      const AnnualsettelmentSchema = Joi.object({
        name: Joi.string().required(),
        subject: Joi.date().required(),
        date: Joi.string().required(),
        employeeNumber: Joi.number().required(),
        joiningDate: Joi.date().required(),
        resumingVacation: Joi.number().required(),
        vacationStartDate: Joi.date().required(),
        to: Joi.string().required(),
        from: Joi.string().required(),
        preparedName: Joi.string().required(),
        preparedDate: Joi.date().required(),
        hrName: Joi.string().required(),
        hrDate: Joi.date().required(),
        diretorName: Joi.string().required(),
        diretorDate: Joi.date().required(),
      
      });

      const { error } = AnnualsettelmentSchema.validate(req.body);

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
        subject,
        date,
        employeeNumber,
        to,
        from,
        joiningDate,
        resumingVacation,
        vacationStartDate,
        preparedName,
        preparedDate,
        hrName,
        hrDate,
        diretorName,
        diretorDate,
    
      } = req.body;

      let annualsettelment;
      try {
        annualsettelment = await EndofServices.create({
         name,
        subject,
        date,
        employeeNumber,
        to,
        from,
        joiningDate,
        resumingVacation,
        vacationStartDate,
        preparedName,
        preparedDate,
        hrName,
        hrDate,
        diretorName,
        diretorDate,
        });
      } catch (error) {
        return next(error);
      }

      res.status(201).json({ annualsettelment: annualsettelment });
    });
  },
  //--------------------endos services.Api----------------------------
  async UpdateAnnualsettelment(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(err);
      }

      let filePath;
      if (filePath) {
        filePath = req.file.path;
      }

      const AnnualsettelmentSchema = Joi.object({
        name: Joi.string().required(),
        subject: Joi.date().required(),
        date: Joi.string().required(),
        employeeNumber: Joi.number().required(),
        joiningDate: Joi.date().required(),
        resumingVacation: Joi.number().required(),
        vacationStartDate: Joi.date().required(),
        to: Joi.string().required(),
        from: Joi.string().required(),
        preparedName: Joi.string().required(),
        preparedDate: Joi.date().required(),
        hrName: Joi.string().required(),
        hrDate: Joi.date().required(),
        diretorName: Joi.string().required(),
        diretorDate: Joi.date().required(),
      
      });

      const { error } = AnnualsettelmentSchema.validate(req.body);
     
     
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
        subject,
        date,
        employeeNumber,
        to,
        from,
        joiningDate,
        resumingVacation,
        vacationStartDate,
        preparedName,
        preparedDate,
        hrName,
        hrDate,
        diretorName,
        diretorDate,
      } = req.body;

      let UpdateAnnualsettelment;
      try {
     

        UpdateAnnualsettelment = await EndofServices.findOneAndUpdate(
          { _id: req.params.id },
          {
            name,
        subject,
        date,
        employeeNumber,
        to,
        from,
        joiningDate,
        resumingVacation,
        vacationStartDate,
        preparedName,
        preparedDate,
        hrName,
        hrDate,
        diretorName,
        diretorDate,
          },
          { new: true }
        );
      } catch (error) {
        return next(error);
      }

      res.status(201).json({ UpdateAnnualsettelment: UpdateAnnualsettelment });
    });
  },

  //----------------------Delete Api--------------------------
  async deleteAnnualsettelment(req, res, next) {
    let deleteAnnualsettelment;
    try {
        deleteAnnualsettelment = await EndofServices.findOneAndRemove({
        _id: req.params.id,
      });
      if (!deleteAnnualsettelment) {
        return next(Error("Noting to delete."));
      }
      const avatarpath = deleteAnnualsettelment.avatar;

      fs.unlink(`${appRoot}/${avatarpath}`, (err) => {
        if (err) {
          return next(err);
        }
      });
    } catch (error) {
      return next(error);
    }

    res.json({ deleteAnnualsettelment: deleteAnnualsettelment });
  },
//   //---------------------All Employee API -------------------------
  async allAnnualsettelment(req, res, next) {
    let allAnnualsettelment;
    try {
        allAnnualsettelment = await EndofServices.find({})
        .select("-__V -updatedAt")
        .sort({ _id: -1 });
    } catch (error) {
      return next(error);
    }

    res.json({ allAnnualsettelment: allAnnualsettelment });
  },
  //----------------one employee------------------------
  async oneAnnualsettelment(req, res, next) {
    let oneAnnualsettelment;
    try {
        oneAnnualsettelment = await EndofServices.findOne({})
        .select("-__V -updatedAt")
        .sort({ _id: -1 });
    } catch (error) {
      return next(error);
    }

    res.json({ oneAnnualsettelment: oneAnnualsettelment });
  },
  
};

export default AnnualsettelmentController;
