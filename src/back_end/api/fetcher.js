import axios from "axios";

// HEROKU
const fetcher = axios.create({
  baseURL: "https://meetartistserver.herokuapp.com",
  withCredentials: true,
});

// export default fetcher;

// LOCAL
// const fetcher = axios.create({
//   baseURL: "http://localhost:5000",
//   withCredentials: true,
// });

export default fetcher;

const fetcherCookies = axios.create({
  // const fetcherCookies = (token)=>axios.create({
  // method:"post",
  baseURL: "https://meetartistserver.herokuapp.com",
  withCredentials: true,

  // headers:{
  //     'Authorization': `Bearer ${token}`

  // }
});
export { fetcherCookies };
// axios({ method: 'POST', url: 'you http api here', headers: {autorizacion: localStorage.token}, data: { user: 'name' } })
