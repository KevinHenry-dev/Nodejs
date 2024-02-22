import express from "express";

const router = express.Router();

    const data = [
        {
        id: 1,
        name: "franck",
        email: "franck@yahoo.com"
        },
        {
        id: 2,
        name: "Thierno",
        email: "Thierno@yahoo.com",
        },
        {
        id: 3,
        name: "Marguerite",
        email: "Marguerite@yahoo.com",
        },
        {
        id: 4,
        name: "Celia",
        email: "Celia@yahoo.com",
        },
        {
        id: 5,
        name: "Jocelyn",
        email: "Jocelyn@yahoo.com",
        },
            {
        id: 6,
        name: "Xavier",
        email: "Xavier@yahoo.com",
        },
        {
        id: 7,
        name: "Bouba",
        email: "Bouba@yahoo.com",
        },
        {
        id: 8,
        name: "Kevin",
        email: "Kevin@yahoo.com",
        },
        {
        id: 9,
        name: "Rachida",
        email: "Rachida@yahoo.com",
        },
        {
        id: 10,
        name: "Francis",
        email: "Francis@yahoo.com",
        },
        {
        id: 11,
        name: "Djamal",
        email: "Djamal@yahoo.com",
        },
        {
        id: 12,
        name: "Richard",
        email: "Richard@yahoo.com",
        },
        {
        id: 13,
        name: "Virginie",
        email: "Virginie@yahoo.com",
        },
        {
        id: 14,
        name: "Noran",
        email: "Noran@yahoo.com",
        },
        {
        id: 15,
        name: "David",
        email: "David@yahoo.com",
        },
        {
        id: 16,
        name: "Aaron",
        email: "Aaron@yahoo.com",
        },
        {
        id: 17,
        name: "Geraldine",
        email: "Geraldine@yahoo.com",
        },
    ];
// ROUTE GET POUR RÉCUPÉRER TOUS LES UTILISATEURS 
router.get('/all', (req, res) => {
    res.status(200).json(data) // récupération des infos const data
})

// ROUTE POST POUR AJOUTER UN NOUVELLE UTILISATEUR (REQ.BODY) AVEC PUSH
router.post('/add', (req, res) => {
    data.push(req.body)
    res.status(201).json(data)
})


// ROUTE DELETE POUR SUPPRIMER UN UTILISATEUR PAR SON ID 
//ROUTE.....("/DELETE/:ID")
//REQ.PARAMS.ID
//USE FILTER
router.delete('/delete/:id', (req, res) => {
//REQ.PARAMS.ID
    const checkId = data.some(user => user.id == req.params.id)

    if(checkId){
        //FILTRAGE DES DONNÉES POUR OBTENIR UN NOUVEAU TABLEAU SANS L'UTILISATEUR SUPPRIMÉ
    const newData = data.filter(user => user.id != req.params.id)
    res.status(200).json(newData)
    }

    if(!checkId) res.status(404).json({ response: "user not found !"})
})

router.put('/update/:id', (req, res) => {
    const {id} = req.params
    //const { name } = req.body

    const checkId = data.some(user => user.id == id)

    if(checkId){
        let result = data.filter(user => {
            if(user.id == id){
                user.name = req.body.name
            }
            return user
        })
        res.status(200).json(result)
    }

    if(!checkId) res.status(404).json({ response: " user not found !"})
})





export default