/** @type {import('next').NextConfig} */
import { config } from "dotenv";

config();
const nextConfig = {
  images: {
    domains: ["images.prismic.io", "aceternity.com"],
  },
  env: {
    FIREBASE_API_KEY: process.env.REACT_APP_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.REACT_APP_DB_URL,
    FIREBASE_PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_APP_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.REACT_APP_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.REACT_APP_MEARSUREMENT_ID,
  },
};

export default nextConfig;
