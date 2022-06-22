import { rest } from 'msw';

const getUser = rest.get('/user', (req, res, ctx) =>
  res(ctx.json({ name: 'Ilia', familyName: 'Mitvichin' }))
);

export const userHandlers = [getUser];
