import jwt from 'jsonwebtoken'

export default function TokenProvider(secret: string) {
    const generate = (payload: any): string => {
        return jwt.sign(payload, secret, { expiresIn: '3600s' });
    }

    const verify = (token: string): boolean => {
        try {
            jwt.verify(token, secret);
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    const payload = (token: string): string | jwt.JwtPayload | null => {
        return jwt.decode(token)
    }

    return {
        generate,
        verify,
        payload,
    }
}