import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const { username, password } = req.body;

  if (password !== 'password') {
    return res.status(401).json({ error: 'Invalid password' });
  };

  let data = {
    signInTime: Date.now(),
    username
  };

  const token = jwt.sign(data, jwtSecretKey, { expiresIn: '1h' });
  res.status(200).json({ message: 'Login successful', token });
};




  
  
  









// export default class JwtProvider {
//   constructor(secret) {
//     this.secret = secret;
//   }

//   generateToken(payload) {
//     return jwt.sign(payload, this.secret, { expiresIn: '1h' });
//   }

//   verifyToken(token) {
//     try {
//       return jwt.verify(token, this.secret);
//     } catch (error) {
//       throw new Error('Invalid token');
//     }
//   }

//   decodeToken(token) {
//     return jwt.decode(token);
//   }
// };