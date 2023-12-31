import Joi from "joi";

import User from "../../model/authmodle/user";
import bcrypt from "bcrypt";

import JWT from "../../services/Jwt";

const LoginSchema = {
  async login(req, res, next) {
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string(),
    });

    const { error } = loginSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    //--------------chack user-------------
    let AccessToken;
    let loginUser
    try {
       loginUser = await User.findOne({ email: req.body.email });

      if (!loginUser) {
        return next(Error("User and Password are not found"));
      }
    } catch (error) {
      return next(error);
    }
    //-------------match password---------------------
    console.log(loginUser)

    const match =  bcrypt.compare(req.body.password, loginUser.password);

    if (!match) {
      return next(Error("User and Password are Wrong"));
    }

    AccessToken = JWT.sign({ _id: loginUser._id });
    res.json({ AccessToken });
  },
};
export default LoginSchema;
