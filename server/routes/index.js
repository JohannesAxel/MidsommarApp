import Teams from '../controllers/team';

export default (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Midsommar API!',
  }));

  app.post('/api/teams', Teams.signUp); // API route for user to signup
  app.put('/api/teams/:bookId', Teams.modify);
  app.delete('/api/teams/:bookId', Teams.delete);
  
};