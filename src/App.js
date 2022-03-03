import './App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [jwt, setJwt] = useState(null)
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwt}`
  }

  const authURL = 'http://localhost:8000/api/token/' 

  useEffect(() => {
    axios.post(authURL, {username: 'alushi', password: '1234'})
    .then((res) => {
      console.log(res)
      setJwt(res.data.access)
      console.log("Response: " + res.data.access)
    })
    .catch(err => console.log(err))
  }, [])

  const getURL = 'http://localhost:8000/rotmg/collection/'
    const getFunc =  async () => {
      try{
        await axios.get(getURL, {headers: headers})
        .then(res => console.log(res))
        .catch(err => console.log(err))
      } catch(err){
        console.log(err)
      }
    }

    const testPost = async () => {
        try{
          await axios.post()
        } catch(err){
          console.log(err)
        }
    }

   useEffect(() => {console.log(jwt)}, [jwt])
    return (
      <>
    <p>hello</p>
    <button onClick={() => getFunc() }>
      Get Moments
    </button>
    </>
  );
}

export default App;
