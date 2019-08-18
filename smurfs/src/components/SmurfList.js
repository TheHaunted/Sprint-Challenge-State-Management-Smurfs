import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext.js';

const SmurfList = () => {
    console.log('context', useContext(AppContext));
    const smurfs = useContext(AppContext);
    if(smurfs){
        return (
            <div>
                {smurfs.map(smurf => {
                    return <div>{smurf.name}</div>
                })}
            </div>
        )
    } else {
        return <div>Loading</div>
    }
}

export default SmurfList;