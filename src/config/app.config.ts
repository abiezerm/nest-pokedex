export const AppConfig = () => ({
  environment: process.env.NODE_ENV || 'development',
  mongoDb: process.env.MONGODB,
  port: process.env.PORT || 3000,
  defaultLimit: +process.env.DEFAULT_LIMIT || 5,
});
