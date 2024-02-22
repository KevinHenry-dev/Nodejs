import express from "express"
import data from "./data.json" assert { type: "json" }; // fichier data.json importer

const router = express.Router();

router.get("/all", (req, res) => {  //EXERCICE 1
    res.status(200).json(data)
})

router.get("/detail/:id", (req, res) =>{ //EXERCICE 2
    const { id } = req.params
    const checkId = data.some(sneaker => sneaker.id == id)

    if(checkId){
        let result = data.filter(sneaker => sneaker.id == req.params.id)
        res.status(200).join(result)
    }
    if(!checkId) res.status(404).json("Article not found ! 🥲")
})

router.get("/category/femme", (req, res) =>{ // EXERCICE 3
    const category = data.filter(sneaker => sneaker.category == "f" || sneaker.category == "mixe" )
    res.status(200).json(category)
})

router.get("/category/homme", (req, res) =>{ // EXERCICE 3
    const category = data.filter(sneaker => sneaker.category == "h" || sneaker.category == "mixe" )
    res.status(200).json(category)
})

router.get("/genre/:category", (req, res) =>{
    const cat = req.params.category
    const sneakers = data.filter(sneaker => sneaker.category == cat || sneaker.category == "mixe" )
    res.status(200).json(sneakers)
})

router.delete("/delete/:id", (req, res) => {
    
    const deleteSneaker = data.some(sneaker.id == req.params.id)
    
    if(checkId){
        let result = data.filter(sneaker => sneaker.id!= req.params.id)
        res.status(200).json(result)
    }

    if(!checkId) res.status(404).json("Sneaker not found !");
})

router.put("/update/:id", (req, res) => {

    const checkId = data.some(sneaker => sneaker.id == req.params.id)

    if(checkId){
        let result = data.filter(sneaker => {
            if(sneaker.id == req.params.id){
                sneaker.online = !sneaker.online
            }
            return sneaker
        })
        res.status(200).json(result)
    }

    if(!checkId) res.status(404).json("Sneaker not found !");
})

export default router;