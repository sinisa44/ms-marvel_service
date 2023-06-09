import express from 'express';

import * as CharacterController from '../controllers/characterController';

const router = express.Router();

router.get('/', CharacterController.getCharacters);
router.post('/', CharacterController.saveFavoriteCharacter);
router.get('/favorites', CharacterController.getFavoriteCharacters);

export default router;