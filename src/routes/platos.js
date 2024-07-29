import express from 'express';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.get('/platos/v0/platos', (req, res) => {
    const categoria = req.query.categoria ?? 'principal';
    res.status(200).json({ platos: [], categoria });
});

export default router;