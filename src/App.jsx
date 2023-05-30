import { useState,useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'

import { useSelector, useDispatch } from 'react-redux';
 import { getApiConfiguration } from './store/homeSlice';
function App() {
  const dispatch  = useDispatch();
const {url}= useSelector((state)=>
state.home
)

  useEffect(()=>{
    apiTesting( );
    
  },[]);
  const apiTesting=()=>{
    fetchDataFromApi('/movie/popular').then((res)=>{
      console.log(res);
      dispatch (getApiConfiguration(res));
      //after calling dispatch usmein action store karliya phir uss action mein res store karlia toh jo bhi api ka data humein network tab mein show ho raha tha vo humein redux store mein ho jaayega now the task is how to ascess it (?.) this is called optional chaining coz api se data aane mein time lagt h toh isse jab tak yeh undefined na btade isliye isse use karte h
    });
  };

  return (
       
    <div>
    App
    {url?.total_pages}  
    
    
    </div>
    
  )
}


export default App


