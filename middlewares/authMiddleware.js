const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('🪪 Token decodificado en middleware:', decoded); // <-- Debe mostrar { id: ... }
    req.user = decoded; // Asegúrate de que `id` esté presente en el token
    console.log('🔐 Usuario autenticado:', req.user); // Deberías ver { id: '...', iat: ..., exp: ... }

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = authMiddleware;
