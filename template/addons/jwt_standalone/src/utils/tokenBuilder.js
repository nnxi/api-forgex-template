import jwt from 'jsonwebtoken';

const tokenBuilder = (clientData = {}) => {
    const payload = {
        name: clientData.name || 'anonymous',
        role: clientData.role || 'guest'
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1d'
    })
}

export default tokenBuilder