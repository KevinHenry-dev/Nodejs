import dotenv from 'dotenv'

dotenv.config() // permet d'utiliser toutes les constantes créer dans le dossier dotenv

export const env = {
    port: process.env.PORT,
    mongoURL: process.env.MONGO_URI,
    token: process.env.TOKEN
}

