import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import env from "../utils/envValidation";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, env.TOKEN) as string;

    (req as any).user = decoded;

    next();
  } catch (err) {
    res.status(403).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;

// In this line, the decoded user object is assigned to the user property of the incoming request object (req). The (req as any) syntax is a TypeScript type assertion, which tells the compiler to treat the req object as an any type, allowing us to access the user property without any type errors.

// This line of code is typically used in middleware functions for authentication and authorization purposes. By assigning the decoded user object to the user property of the request object, we can make it available for further processing in s
