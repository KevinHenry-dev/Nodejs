import jwt from 'jsonwebtoken'
import { env } from '../config/index.js'
import { createError } from './error.js'

export const verifieToken = (req, res, next) => {
                                           // Récupère le jeton (token) JWT à partir des cookies de la requête
    const token = req.cookies.access_token;
    if(!token) return next(createError(401, "Access Denied")) // si le token n'est pas présent, erreur 401 => accès refusé
    jwt.verify(token, env.token, (err, user) => { // Vérifier la validité du jeton en utilisant jwt.verify
        // si une erreur se produit lors de la vérification du jeton
        if(err) {
            return next(createError(403, "Token non valide !")) // Renvoie une erreur 403 (interdit) car le jeton (token) n'est pas valide
        }
        req.user = user // si la vérification réussit, ajoute les information de l'utilisateur dans l'objet req
        next();
        })
        
    }
    
    
