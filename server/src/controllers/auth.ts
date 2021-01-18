import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User";

export const userSignUp = async (
  _: undefined,
  { username, email, password }: any
) => {
  try {
    const exisitngUser = await User.findOne({ username });

    if (exisitngUser) {
      return {
        message: "Username is already in use",
        success: false,
      };
    }

    const exisitngEmail = await User.findOne({ email });

    if (exisitngEmail) {
      return {
        message: "Email is already in use",
        success: false,
      };
    }

    const hashedPass = await bcrypt.hash(password, 10);

    await new User({
      username,
      email,
      password: hashedPass,
    }).save();

    return {
      message: "User Created Succesfully",
      success: true,
    };
  } catch (err) {
    return {
      message: "Internal Server Error",
      success: false,
    };
  }
};

export const userLogIn = async (_: undefined, { email, password }: any) => {
  const user = await User.findOne({ email });

  if (!user) {
    return "User does not exist";
  }

  const check = await bcrypt.compare(password, user.password);

  if (!check) {
    return {
      message: "Auth Failed",
      success: false,
    };
  }

  if (!process.env.SECRET) {
    throw new Error("Environment Invalid");
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET);
};
