import { Request, Response } from 'express';
import { Err } from '../interfaces';

export default (err: Err, _req: Request, res: Response) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      return res.status(400).json({ message });
      break;
    case 'NotFoundError':
      return res.status(404).json({ message });
      break;
    case 'Authorization':
      return res.status(401).json({ message });
      break;
    case 'LengthValidation':
      return res.status(422).json({ message });
      break;
  
    default:
      return res.status(500).json({ message });
      break;
  }
};