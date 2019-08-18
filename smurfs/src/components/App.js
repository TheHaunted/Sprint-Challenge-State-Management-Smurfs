import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import SmurfForm from './SmurfForm.js';
import SmurfList from './SmurfList.js';
import { AppContext } from '../contexts/AppContext.js';

const App = () => {
  console.log('appContext', AppContext);

  const [smurfs, setSmurfs] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(error => console.log(error))
  }, [])
  console.log('smurfs', smurfs);


  const addSmurf = smurfObj => {
    setSmurfs([...smurfs, smurfObj])
  }

  return (
    <AppContext.Provider value={smurfs}>
      <div className="App">
        <SmurfForm addSmurf={addSmurf}/>
        <SmurfList smurfs={smurfs} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
