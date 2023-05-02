import axios from "axios";
//axios use kark ek gloBAL Method likhna h apni apis call karwane k liye.

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN= import.meta.env.VITE_APP_TMDB_TOKEN;
// ab humne token save kiya h apis ka  or humein tocken import kiya h iske baad na humein ye jo api call karwaenge na vo headers mein bhejna h agar mistake nahi karni toh double quotes k andar hum seedha .env wali api daaldenge
const headers= {
    Authorization: "bearer "+ TMDB_TOKEN,
};

export const fetchDataFromApi= async(url, params)=>{
    try{
 const {data}= await axios.get(BASE_URL+url,{
    // header: headers     
    // headers mein key or value same h toh isse diff way mein bhi likh sakte h
    headers,
    params

 })
 // jo bhi response humein milta h vo hum axios get karne pe milta h vo hum data key k andar save hojaata h or uss data ko humne destructure kark return kardiya h ab isse easliy hum call karwa sakte h 
 return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
    //agar hmaari api call nahi hoti h toh error aaegaa toh vo dikhane k liye hum catch method ka use karenge. axios.get k andar second option mein configuration pass krni hoti h for example jaise headers and all

}
