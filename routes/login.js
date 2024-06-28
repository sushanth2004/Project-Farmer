import { login as loginController } from '../controllers/loginController.js'; // Adjust import to use named export

import express from 'express';
const router = express.Router();

router.post('/', loginController);

export default router;
