import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "https://note-taking-backend-7lke.onrender.com/"
})

export default BACKEND_URL

//backend connection with frontend 
//http://localhost:4001/api/v1/noteapp/