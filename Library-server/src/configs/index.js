import { configDotenv } from "dotenv";

configDotenv();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';


const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.xxjn2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const PORT = process.env.PORT || 8000;
const ROUND = process.env.ROUNDS || Math.floor(Math.random()*11);
console.log(MONGO_URL);
 
export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT,
        round: ROUND
    }
};

// export default config ;