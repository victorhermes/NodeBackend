import User from '../models/User';

// import Appointments from '../models/Appointments';

class ScheduleController {
  async index(req, res) {
    const checkProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkProvider) {
      return res.status(401).status({ error: 'Usuário precisa ser provider' });
    }

    return res.json();
  }
}

export default new ScheduleController();
