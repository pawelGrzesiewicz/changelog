import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePasswords = (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
}

export const hashPassword = (password: string): Promise<string> => {
    return bcrypt.hash(password, 5);
}

export const createJWT = (user) => {
    return jwt.sign({
            id: user.id,
            username: user.username
        }, process.env.JWT_SECRET
    );
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401);
        res.json({message: "Not authorized"});
        return;
    }

    const [, token] = bearer.split(' ');

    if (!token) {
        res.status(401);
        res.json({message: "Invalid token"});
        return;
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        console.error(error);
        res.status(401);
        res.json({message: "Invalid token"});
        return;
    }
}