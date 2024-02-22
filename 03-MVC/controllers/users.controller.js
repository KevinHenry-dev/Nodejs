import Model from "../models/users.model.js"
import mongoose from "mongoose"
////////
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { env } from "../config/index.js";

// A CHAQUE FOIS QU'ON CRÉER UNE MÉTHODE IL FAUT ENSUITE CRÉER LA ROUTE DANS LE ROUTER 

    export const signup = async (req, res, next) => {
        try { // Début du bloc try pour la gestion des erreurs
        const hashedPassword = await bcrypt.hash(req.body.password, 10) // Hashage du mot de passe avec bcrypt,  "10" est le nombre de tours de salage
    
        await Model.create({  // Création d'un nouvel utilisateur dans la base de données avec les informations reçues et le mot de passe haché
            ...req.body,
            password: hashedPassword
        });
    
        res.status(201).json("User has been created!"); // Envoi d'une réponse avec le statut 201 (créé) et un message de confirmation
        } catch (error) {  // Si une erreur se produit, passez-la au prochain middleware pour la gestion des erreurs
        next(error);
        }
    };

        export const sign = async (req, res,next) => {
            try{
                const user = await Model.findOne({ email: req.body.email }) // Recherche l'utilisateur dans la base de données par son email
                if(!user) return res.status(404).json("User not found!"); // si l'utilisateur n'est pas trouvé, renvoie une erreur 404.
            
                const comparePassword = await bcrypt.compare(  // Compare le mot de passe fourni dans la requête avec le mot de passe de l'utilisateur (qui est dans la bdd)
                    req.body.password,
                    user.password
                    )
                    if(!comparePassword) return res.status(400).json("Wrong Credentials!") // Si le mot de passe est incorrect, renvoie une erreur 400.
            
                    const token = jwt.sign( // Crée un jeton JWT pour l'utilisateur avec son ID, expire après 24 heures le premier argument est la charge utile du token. 
                    
                    { id: user._id}, // Ici, nous incluons l'ID de l'utilisateur
                    // Le deuxième argument est la clé secrète, 
                    // qui est utilisée pour signer le token. 
                    // Nous la récupérons à partir des variables d'environnement
                    env.token, 
                    // Le troisième argument est un objet contenant les options du token. 
                    // Ici, nous définissons une durée d'expiration de 24 heures pour le token
                    { expiresIn: "24h"})
                
                // Supprime le mot de passe de l'utilisateur pour des raisons de sécurité.
                    // Ce code utilise la destructuration pour extraire la propriété 
                    // password de user._doc. 
                    // Toutes les autres propriétés sont regroupées dans un nouvel 
                    // objet appelé others. C’est une pratique courante lorsque 
                    // vous voulez exclure certaines propriétés d’un objet. 
                    const { password, ...others } = user._doc
            
        
                    res.cookie('access_token', token, { httpOnly: true }) // Envoie le jeton (token) JWT sous forme de cookie HTTPOnly
                    .status(200)
                    .json(others) // Renvoie les données d'utilisateur en réponse (à l'exeption du mot de passe)
                    }catch(error){
                    next(error)
                    }
                } 
                
        
            
                
            
            

                // Récupérer user
                export const getUsers = async (req, res) => {
                    try{
                        const users = await Model.find()
                        res.status(200).json(users)
                    }catch(error){
                        console.log(error);
                    }
                }

                // Récupérer user par l'id 
                export const getUserById = async (req, res) => {
                    try{
                        const user = await Model.findById(req.params.id)

                        if(user) res.status(200).json(user)

                        if(!user) res.status(404).json("User not Found") // code si jamais l'user n'est pas trouvé dans la base de donnée
                    }catch(error){
                        console.log(error);
                    }
                }

                // delete de l'user 
                export const deleteUser = async (req, res) => {
                    try{
                        const user = await Model.findById(req.params.id) // requete pour aller chercher le user

                        if(!user) return res.status(404).json("User not found!") // si l'user n'est pas trouvé // ici le return coupe le script 

                        await Model.findOneAndDelete(req.params.id)

                        res.status(200).json(`The user with id : ${req.params.id} deleted !`)

                    }catch(error){
                        console.log(error);
                    }
                }

                // PUT
                export const updateUser = async (req, res) => {
                    try{
                        const user = await Model.findById(req.params.id)

                        if(!user) return res.status(404).json("User not found !")

                        
                        const userUpdated = await Model.findByIdAndUpdate( //LIGNE PRIMORDIAL POUR MODIFIER UN USER
                            req.params.id, 
                            { $set: req.body }, 
                            { new: true }
                        )

                    res.status(200).json({
                        message: "User updated",
                        userUpdated
                    })
                    }catch(error){
                        console.log(error);
                    }
                }