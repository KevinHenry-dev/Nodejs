import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from 'axios'

const Home = () => {
    const [users, setUsers] = useState([])
    const [title, setTitle] = useState("Je viens de la page home 🕺🏿")

        useEffect(() => {
            const fetchUsers = async () => {
                try{
                    //requete axios
                    const data = await axios.get(`http://localhost:8000/api/user/all`)
                    setUsers(data)
                    console.log(data);
                }catch(error){
                    console.log(error);
                }
            }
            fetchUsers()
        }, [])

        const changeTitle = () => {
            setTitle("Hello World 👀")
        }

    return(
        <>
        <Header />
            <h1>{title}</h1>

            <button onClick={changeTitle}>Change</button>

            {users.map((user, index) => (
                <div key={index}>
                    <p>{user.prenom} : {user.email}</p>
                </div>
            ))}
        </>
        )
            
        
}

export default Home;