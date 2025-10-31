import { config } from "dotenv";

config()

const appconfig = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV || 'development',
}

export default appconfig;