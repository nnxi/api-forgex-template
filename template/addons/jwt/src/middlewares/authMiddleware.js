import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            code: 'Unauthorized',
            message: 'Token is missing or invalid format'
        })
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            code: 'Forbidden',
            message: 'Token is expired or invalid'
        })
    }
}

export default verifyToken;