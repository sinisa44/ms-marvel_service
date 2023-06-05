import { RequestHandler,Request, Response } from "express";

import UserModel from "../models/user";
// import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../utils/envValidation";


interface IUser {
  username?: string;
  password?: string;
  email?: string;
  _id?: string;
}

export const register: RequestHandler<
  unknown,
  unknown,
  IUser,
  unknown
> = async (req, res, next) => {
  const { username, password, email } = req.body;

  try {
    const newUser = await UserModel.create({ username, password, email });

    res.status(201).json({ data: { newUser } });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
};

export const login: RequestHandler<unknown, unknown, IUser, unknown> = async (
  req,
  res,
  next
) => {
  const { email, password } = req.body;

  try {
    const user  = await UserModel.findOne({ email: email });

    if (!user) {
      res.status(404).json({ message: "invalid credentials 1" });
    }

    const compare = await comparePassword(password!, user?.password!);

    if (compare) {
      const token = jwt.sign(
        {
          username: user?.username,
          password: user?.password,
          email: user?.email,
          _id: user?._id,
        },
        env.TOKEN,
        {
          expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
        }
      );
      res.status(201).json({ token });
    } else {
      res.status(401).json({ message: "invalid credentials 2" });
    }

    console.log({ compare });
  } catch (error) {
    console.error(error);
  }
};

const comparePassword = async (
  inputPassword: string,
  userPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(inputPassword, userPassword);
};
