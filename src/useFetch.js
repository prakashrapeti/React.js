import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data,setData] = useState (null);
    const [isPending,setiSPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();


        setTimeout(() => {
         fetch(url)
             .then((res) => {
                 if(!res.ok){
                     throw Error ('could not fetch the data for that resourse');
                 }
                 return res.json();
             }).then(data =>{
                 console.log(data)
                 setData(data);
                 setiSPending(false);
                 setError(null);
             })
             .catch((err) => {
                 // console.log(err.message)
                 if(err.message ===' AbortError'){
                    console.log('fetch aborted')
                 }else{
                    setError(err.message)
                    setiSPending(false)
                 }
                
             })
         },1000);
         // console.log("use effect");
         // console.log(name)

         return () => abortCont.abort();
 
     },[url]);

     return {data , isPending , error};
}
 
export default useFetch;