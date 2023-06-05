import express from 'express';

import * as CharacterController from '../controllers/characterController';

const router = express.Router();

router.get('/', CharacterController.getCharacters);


export default router;