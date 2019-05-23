import express from 'express';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import rootRouter from './routes';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

const mockUser = {
  id: 0,
  email: 'admin@admin.admin',
  username: 'admin',
  password: 'admin',
};

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  (email, password, done) => {
    // Here you can insert your own logic.
    // See examples here: http://www.passportjs.org/docs/downloads/html/#configure
    if (email !== mockUser.email) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (password !== mockUser.password) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, mockUser);
  },
));

passport.use(new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
  },
  (payload, done) => {
    // Here you can insert your own logic.
    if (payload.id !== mockUser.id) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    return done(null, mockUser);
  },
));

app.use(rootRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
