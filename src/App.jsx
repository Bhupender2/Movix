import { useState,useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import {  BrowserRouter, Routes, Route} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
 import { getApiConfiguration } from './store/homeSlice';

 import Header from './components/header/Header';
 import Footer from './components/footer/Footer';
 import Home from './pages/home/Home';
 import Detail from './pages/details/Detail';
 import SearchResult from './pages/searchResult/SearchResult';
 import Explore from './pages/explore/Explore';
 import pageNotFound from './pages/404/pageNotFound';

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
       <BrowserRouter>
      {/* <Header/>*/}

       <Routes>
       <Route path="/"  element={<Home/>}/>
       <Route path="/:mediaType/:id" element={<Detail/>}/>
       <Route path="/search/:query" element={<SearchResult/>}/>
       <Route path="/explore/:mediaType" element={<Explore/>}/>
       <Route path="*" element={<pageNotFound/>} />
       
       </Routes>
       {/*<Footer/>*/}
       
       </BrowserRouter>
    
    
  )
}


export default App

//browser router k andar hmari puri app wrap  rahegiii sare routes hmaare routes components k andar hi rahenge uske andar ek component rehta h Route naam se vo do props leta h path or dusra element jo hum jsx mein denge
//route path="* " any path besides the above following it will show error or page not found
