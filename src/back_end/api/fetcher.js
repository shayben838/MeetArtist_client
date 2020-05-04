import axios from "axios";

const fetcher = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})



export default fetcher;

const fetcherCookies = axios.create({
    // const fetcherCookies = (token)=>axios.create({
    // method:"post",
    baseURL: "http://localhost:5000",
    withCredentials: true,
    // headers:{
    //     'Authorization': `Bearer ${token}`

    // }
})
export  {fetcherCookies};
// axios({ method: 'POST', url: 'you http api here', headers: {autorizacion: localStorage.token}, data: { user: 'name' } })