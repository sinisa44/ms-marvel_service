import express from 'express';

import * as ComicController from '../controllers/comicController';

const router = express.Router();

router.get('/testRoute', ComicController.getComics)
router.post('/', ComicController.saveFavoriteComic);
router.get('/', ComicController.getFavoriteComics);
router.get('/:id', ComicController.getFavoriteComicsById)

export default router;