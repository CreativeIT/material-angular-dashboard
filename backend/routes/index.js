import { Router } from 'express';
import passport from 'passport';

import { login } from './controllers/auth';
import * as users from './controllers/users';

const rootRouter = new Router();

rootRouter.post('/login', login);

const apiRouter = new Router();

apiRouter.use(passport.authenticate('jwt', { session: false }));

const usersRouter = new Router();

usersRouter.get('/current', users.current);

apiRouter.use('/users', usersRouter);

rootRouter.use('/api', apiRouter);

export default rootRouter
