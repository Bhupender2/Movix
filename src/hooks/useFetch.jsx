import { useEffect, useState } from "react"; 
import { fetchDataFromApi } from "../utils/api";
const useFetch =(url)=>{
    const [data,setData]=useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
 useEffect(()=>{
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
    .then((res)=>{
        setLoading(false);
        setData(res);
    })
    .catch((err)=>{
        setLoading(false);
        setError("something went wrong!");
    });


 }, [url]);

 return{ data, loading, error};
};
export default useFetch;

//jaise hi api call hopgi loading state enable ho jaayegi or jaise se hi api se response milega toh loading state false hojaaegi or jo bhi data milega vo set ho jaayega setData
// dependencies mein url change karte h toh ya kaise bhi change kiya dynamically kisi k button k click par toh kaise bhi kari jab bhi url change hoga toh use effect phirse call hoga tabhi initially setData and setError null ho
     //at the end humne teeno data loading error yeh sab return karwa rakha h