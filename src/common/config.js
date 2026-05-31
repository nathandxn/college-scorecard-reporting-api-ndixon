const requiredEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const appConfig = {
  port: Number(process.env.PORT) || 3000,
  snowflake: {
    account: requiredEnv('SNOWFLAKE_ACCOUNT'),
    username: requiredEnv('SNOWFLAKE_USER'),
    role: requiredEnv('SNOWFLAKE_ROLE'),
    warehouse: requiredEnv('SNOWFLAKE_WAREHOUSE'),
    database: requiredEnv('SNOWFLAKE_DATABASE'),
    schema: requiredEnv('SNOWFLAKE_SCHEMA'),
    privateKeyPath: requiredEnv('SNOWFLAKE_PRIVATE_KEY_PATH'),
    privateKeyPassphrase: process.env.SNOWFLAKE_PRIVATE_KEY_PASSPHRASE,
  },
};
