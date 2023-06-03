import dotend from "dotenv"

dotend.config()

export const config = {
    openAI: {
        key: process.env.OPENAI_API_KEY
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        db: process.env.REDIS_DB
    }
}