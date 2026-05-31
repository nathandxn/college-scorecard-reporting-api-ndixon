import http from 'node:http';
import app from './app.js';
import { appConfig } from './common/config.js';
import { warmup, destroy } from './common/snowflake.js';

const server = http.createServer(app);

const shutdown = async (signal) => {
  console.log(`${signal} received, shutting down...`);
  server.close(async () => {
    await destroy();
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

try {
  await warmup();
  console.log('Connected to Snowflake');
  server.listen(appConfig.port, () => {
    console.log(`API listening on port ${appConfig.port}...`);
  });
} catch (err) {
  console.error('Failed to start:', err);
  process.exit(1);
}
