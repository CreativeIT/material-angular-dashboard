import passport from 'passport';
import * as jwt from 'jsonwebtoken';

export const login = (req, res) => {
  passport.authenticate(
    'local',
    { session: false },
    (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Invalid email or password',
          user,
        });
      }
      return req.login(user, { session: false }, (loginErr) => {
        if (loginErr) {
          res.send(loginErr);
        }
        const token = jwt.sign(user, 'secret');
        return res.json({ user, token });
      });
    },
  )(req, res);
};
