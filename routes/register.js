import { register as registerController } from '../controllers/registerController.js'; // Adjust import to use named export

import express from 'express';
const router = express.Router();

router.post('/', registerController);

export default router;
