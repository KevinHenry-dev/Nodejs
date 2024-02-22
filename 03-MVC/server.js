import express from "express"
import { env } from "./config/index.js"
import mongoose from "mongoose" 
import cookieParser from "cookie-parser";
import cors from "cors"

//ROUTES IMPORTÉES
import userRoutes from "./routes/user.router.js"


// APP EXPRESS = PERMET DE CRÉER UN OBJET QUI DONNERA ACCÈS AU MIDDLEWARE
const app = express()

//PORT
const PORT = env.port || 8080

//CONFIGURATION DE LA DATABASE MONGOOSE
mongoose
    .connect(env.mongoURL)
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(error => console.log(error))

// MIDDLEWARE => SÉCURITÉ (INTERCEPTE TOUTES LES REQUETES ENTRANTES vers LE SERVEUR) IL ÉXÉCUTE AVANT QUE LA REQUÈTE AI ACCÈS AU CONTROLLER
app.use(express.json()); //Permet de traduire les données envoyées par POSTMAN 
app.use(cookieParser());
app.use(cors());

//PREFIX ROUTES
app.use("/api/user", userRoutes)

// SERVER
app.listen(PORT, () => {
    console.log(`LISTENING AT http://localhost:${PORT}`);
})