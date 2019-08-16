import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import SmurfForm from './SmurfForm.js';
import SmurfList from './SmurfList.js';

const App = () => {
  const [smurfs, setSmurfs] = useState();
  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => setSmurfs(res.data))
      .catch(error => console.log(error))
  }, [])

  console.log('smurfs', smurfs);

  return (
    <div className="App">
      <SmurfForm />
      {/* <SmurfList smurfs={smurfs} /> */}
    </div>
  );
}

export default App;
