import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado!' });
    }

    if (!(await user.checkPassoword(password))) {
      return res.status(401).json({ error: 'Senha não combina!' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, 'dsjfwef3298fer98hewfr23h7r32ch2rc', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
