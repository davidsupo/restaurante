import express from 'express';

const router = express.Router();

router.get('/ordenes/v0/ordenes/:id', (req, res) => {
    res.status(200).json({ id: req.params.id });
});

export default router;