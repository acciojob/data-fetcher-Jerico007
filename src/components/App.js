import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import './../styles/App.css';


const App = () => {
  const [data,setData] = useState({fetching:false , data : []});
  
  useEffect(()=>{
    fetchData();
  },[])
   
  function fetchData(){
     setData({fetching:true , data:[]});
     axios.get("https://dummyjson.com/products").then((data)=>{
        setData({fetching:false , data: data.data});
        console.log(data.data.products);
     })
  }
  return (
    <div className="App">
      {
        data.fetching ? <h1>Loading...</h1> : <h1>Data Fetched from API</h1>
      }
      {
        data !== null ? <pre>{
            JSON.stringify(data.data)
          }</pre> : ""
      }
    </div>
  )
}

export default App
