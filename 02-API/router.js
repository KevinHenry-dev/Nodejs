import express from "express";

const router = express.Router();

    router.get("/all", (req, res) => {
    res.status(200).json({ 
        response: "L'élément a été récupéré.",
    });
    });

    router.post("/add", (req, res) => {
    res.status(201).json({ // ici le status change lors d'un .post  status(201) et non (200)
        response: "L'élément a été ajouté.",
    });
    });

    router.put("/put", (req, res) => {
    res.status(200).json({
        response: "L'élément a été modifié.",
    });
    });

    router.delete("/delete", (req, res) => {
    res.status(200).json({
        response: "L'élément a été supprimé.",
    });
    });



export default router;