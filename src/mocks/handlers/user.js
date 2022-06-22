import { rest } from 'msw';

const getUser = rest.get('/user', (req, res, ctx) => {
  return res(ctx.json({ name: 'Ilia', familyName: 'Mitvichin' }));
});

export const userHandlers = [getUser];
