import { Request, Response, NextFunction } from "express";
import generateMarvelURL from "../utils/generateMarvelURL";

import ComicModel from "../models/comic";

export const getComics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comics = await fetch(
      `https://gateway.marvel.com/v1/public/comics${generateMarvelURL(1, 1)}`
    );

    res.status(200).json(await comics.json());
  } catch (error) {
    res.status(500).json(error);
  }
};

export const saveFavoriteComic = async (req: Request, res: Response) => {
  try {
    const comic = await ComicModel.create(req.body);

    res.status(201).json(comic);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
};

export const getFavoriteComics = async (req: Request, res: Response) => {
  try {
    const comics = await ComicModel.find({});

    res.status(200).json(comics);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
};

export const getFavoriteComicsById = async (req: Request, res: Response) => {
  try {
    const comic = await ComicModel.findById(req.params.id);

    if (!comic) res.status(404).json({ message: "No comic found" });

    res.status(200).json(comic);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    }
  }
};
