import { config } from "dotenv";

config()

const appconfig = {
    PORT : process.env.PORT,
}

export default appconfig