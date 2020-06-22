import { Router } from 'express';

const routes = Router();

routes.post('/users', (resquest, response) => {
  const { name, email } = resquest.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

export default routes;
