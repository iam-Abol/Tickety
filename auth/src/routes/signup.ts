import express, { Request, Response } from "express";
import { body } from "express-validator";
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ max: 20, min: 4 })
      .withMessage("Password must be between 4 and 20 character"),
  ],
  (req: Request, res: Response) => {
    const { email, password } = req.body;
  }
);

export { router as signupRouter };
