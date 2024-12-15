import { config } from "dotenv";
import path from "path";

config({ path: path.join(process.cwd(), ".env") });

export default {
    port: process.env.PORT || 5000,
    database_url: process.env.DATABASE_URL,
    // Your_ENV
};