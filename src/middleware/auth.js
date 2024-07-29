import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET ?? 'secret_key';

export const authenticate = (req, res, next) => {
    const accessToken = req.headers.authorization;
    const refreshToken = req.cookies?.refreshToken;
    if (!accessToken) {
        return res.status(401).json({ error: 'token is required', message: 'Access Denied. No token provided' });
    }

    if (refreshToken) {
        try {
            const decoded = jwt.verify(refreshToken, SECRET_KEY);
            const accessToken = jwt.sign({ user: decoded.user }, SECRET_KEY, { expiresIn: '5m' });
            res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' });
            res.header('Authorization', accessToken);
        } catch (error) {
            return res.status(400).json({ error: 'Invalid token', message: 'Invalid token' });
        }
    }
    try {
        const decoded = jwt.verify(accessToken, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ error: 'Invalid token' , message: 'Invalid token' });
    }
};