import {defineConfig} from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    'process.env': {
      API_KEY: process.env.API_KEY,
    },
  },
});
