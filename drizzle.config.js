import 'dotenv/config';

export default {
  schema: './src/models/*.js',  // path to your schema file
  out: './drizzle',            // Output folder for migration
  dialect: 'postgresql',       // Database
  dbCredentials: {
    url: process.env.DATABASE_URL,      // From your .env file
  }
};