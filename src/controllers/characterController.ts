import { RequestHandler } from "express";
import generateMarvelURL from "../utils/generateMarvelURL";

interface GetCharactersParams {
  offset: number;
  limit: Number;
}

export const getCharacters: RequestHandler<
  GetCharactersParams,
  unknown,
  unknown,
  unknown
> = async (req, res, next) => {
  const { offset, limit } = req.params;

  try {
    const data =  await fetch(`https://gateway.marvel.com/v1/public/characters${generateMarvelURL(1,1)}`)


    console.log(data);
    
    res.status(200).json(await data.json())
  } catch (error) {
    console.error(error);
    
  }

  return { offset, limit };
};
