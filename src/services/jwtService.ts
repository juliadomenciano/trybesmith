import jwt from 'jsonwebtoken';

class JwtService {
  createToken = (data: object): string => {
    const JWT_SECRET = 'theBestSecretEver';
    const token = jwt.sign({ data }, JWT_SECRET);
    return token;
  };
}

export default JwtService;