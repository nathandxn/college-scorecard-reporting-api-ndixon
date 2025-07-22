import express from 'express';

const app = express();

app.get('/admin', (req, res) => {
  res.send('Welcome to the Admin Panel!');
});

app.listen(3000, () => console.log('API running on port 3000'));

app.get('/', (req, res) =>
  res.json('This test API is now running successfully...'),
);
