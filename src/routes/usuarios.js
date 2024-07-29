import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET ?? 'secret_key';

const router = express.Router();

router.post('/usuarios/v0/auth', (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) {
        res.status(400).json({ error: 'user and password is required' });
    }
    const accessToken = jwt.sign({ user }, SECRET_KEY, { expiresIn: '5m' });
    const refreshToken = jwt.sign({ user }, SECRET_KEY, { expiresIn: '1d' });
    res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' });
    res.header('Authorization', accessToken);
    res.status(200).json({ user, password });
});

router.post('/usuarios/v0/usuarios', (req, res) => {
    const { user, password, name } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    res.status(200).json({ user, password, hashPassword, name});
});

export default router;