import express from 'express'

// ROUTES
import element from "./router.js"
import users from "./router_user.js"
import sneakers from "./router_sneakers.js"

const app = express();


//PORT 
const PORT = process.env.PORT || 8000;

//MIDDLEWARES
app.use(express.json())

//USER ROUTER
app.use("/api/element", element)
app.use("/api/users", users)
app.use("/api/sneakers", sneakers)
// LISTEN
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})