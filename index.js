import express from 'express';

const app = express();

app.listen(3000, () => console.log('API running on port 3000'));

app.get('/', (req, res) => res.json('The test API is running'));
