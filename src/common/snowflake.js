import fs from 'node:fs';
import snowflake from 'snowflake-sdk';
import { appConfig } from './config.js';

const privateKey = fs.readFileSync(appConfig.snowflake.privateKeyPath, 'utf8');

const pool = snowflake.createPool(
  {
    account: appConfig.snowflake.account,
    username: appConfig.snowflake.username,
    role: appConfig.snowflake.role,
    warehouse: appConfig.snowflake.warehouse,
    database: appConfig.snowflake.database,
    schema: appConfig.snowflake.schema,
    authenticator: 'SNOWFLAKE_JWT',
    privateKey,
  },
  { min: 1, max: 10 },
);

export const warmup = () =>
  pool.use(
    (conn) =>
      new Promise((resolve, reject) => {
        conn.execute({
          sqlText: 'SELECT 1',
          complete: (err) => (err ? reject(err) : resolve()),
        });
      }),
  );

export const destroy = () => pool.drain().then(() => pool.clear());

export const query = (sqlText, binds = []) =>
  pool.use(
    (conn) =>
      new Promise((resolve, reject) => {
        conn.execute({
          sqlText,
          binds,
          complete: (err, _stmt, rows) => (err ? reject(err) : resolve(rows)),
        });
      }),
  );
