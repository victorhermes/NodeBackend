import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe!' });
    }

    // const { id, name, email } = await User.create(req.body);
    const user = await User.create(req.body);

    // return res.json({ id, name, email });
    return res.json(user);
  }
}

export default new UserController();
