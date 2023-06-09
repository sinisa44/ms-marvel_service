import { RequestHandler, Request, Response, NextFunction } from "express";
import generateMarvelURL from "../utils/generateMarvelURL";

import CharacterModel from "../models/character";

export const getCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { offset, limit } = req.params;

  try {
    const data = await fetch(
      `https://gateway.marvel.com/v1/public/characters${generateMarvelURL(
        offset as string,
        limit as string
      )}`
    );

    res.status(200).json(await data.json());
  } catch (error) {
    console.error(error);
  }

  return { offset, limit };
};

export const saveFavoriteCharacter = async (req: Request, res: Response) => {
  try {
    const character = await CharacterModel.create(req.body);

    res.status(201).json(character);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
};

export const getFavoriteCharacters = async (req: Request, res: Response) => {
  try {
    const characters = await CharacterModel.find({});

    res.status(200).json(characters);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
};

export const getFavoriteCharactersById = async (
  req: Request,
  res: Response
) => {
  const { _id } = req.params;

  try {
    const character = CharacterModel.findById(_id);

    res.status(200).json(character);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
};
