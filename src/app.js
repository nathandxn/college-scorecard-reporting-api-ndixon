import express from 'express';

const app = express();

app.get('/', (req, res) => res.json('This test API is now running...'));

export default app;
