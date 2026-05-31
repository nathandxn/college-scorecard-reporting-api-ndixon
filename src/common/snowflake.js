import fs from 'node:fs';
import snowflake from 'snowflake-sdk';
import { appConfig } from './config.js';

const privateKey = fs.readFileSync(appConfig.snowflake.privateKeyPath, 'utf8');

const connection = snowflake.createConnection({
  account: appConfig.snowflake.account,
  username: appConfig.snowflake.username,
  role: appConfig.snowflake.role,
  warehouse: appConfig.snowflake.warehouse,
  database: appConfig.snowflake.database,
  schema: appConfig.snowflake.schema,
  authenticator: 'SNOWFLAKE_JWT',
  privateKey,
});

export const connect = () =>
  new Promise((resolve, reject) => {
    connection.connect((err, conn) => (err ? reject(err) : resolve(conn)));
  });

export const destroy = () =>
  new Promise((resolve) => {
    connection.destroy(() => resolve());
  });

export const query = (sqlText, binds = []) =>
  new Promise((resolve, reject) => {
    connection.execute({
      sqlText,
      binds,
      complete: (err, _stmt, rows) => (err ? reject(err) : resolve(rows)),
    });
  });
