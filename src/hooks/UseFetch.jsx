import  { useState,useEffect } from 'react'
import axios from 'axios';
const UseFetch = (apiPath,queryTerm="") => {
const [data,setData] = useState([]);
const apiKey = 'aff7a531ec362b982b4e2de0ed46b723';
const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

useEffect(()=>{
  const fetchData = async () => {
    try {
      
      const response = await axios.get(url);
      setData(response.data.results);

    }catch(error){
      console.error('Error fetching data',error);
    }
  };
  fetchData();
 },[url])

  return (
    {data}
  )
}

export default UseFetch
