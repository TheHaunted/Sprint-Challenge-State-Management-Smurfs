import React from 'react';

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return <div>{smurf}</div>
            })}
        </div>
    )
}

export default SmurfList;