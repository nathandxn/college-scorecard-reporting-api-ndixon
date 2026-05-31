import express from 'express';
import schoolsRouter from './routes/schools.js';
import avgAdmRateRouter from './routes/avg-admission-rate.js';

const app = express();

app.get('/', (req, res) => res.json('This test API is now running...'));

app.use(schoolsRouter);
app.use(avgAdmRateRouter);

app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
