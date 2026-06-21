import express, { Request, Response } from "express";
import { body } from "express-validator";

import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";
const router = express.Router();
import jwt from "jsonwebtoken";
import { validateRequest } from "../middlewares/validate-request";
router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ max: 20, min: 4 })
      .withMessage("Password must be between 4 and 20 character"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    const user = User.build({ email, password });
    await user.save();
    //jwt

    const userJwt = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_KEY!
    );

    req.session = { jwt: userJwt };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
