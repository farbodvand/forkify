import {defineConfig} from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  define: {
    API_KEY: JSON.stringify(process.env.API_KEY),
  },
});
