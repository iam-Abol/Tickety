import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // return res.send(errors.array());
      throw new Error("Invalid email or password");
    }

    const { email, password } = req.body;
    console.log("Creating a user...");
    res.send({});
  }
);

export { router as signupRouter };
