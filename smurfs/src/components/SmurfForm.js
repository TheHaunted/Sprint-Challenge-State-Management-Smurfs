import React, { useState } from 'react';
import './SmurfForm.css';
import axios from 'axios';

const SmurfForm = () => {
    const [smurf, setSmurf] = useState({name: '', age: '', height: '', id: ''});

    const handleChange = event => {
        setSmurf({...smurf, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res => console.log('post', res))
            .catch(error => console.log(error))
    }

    console.log('form', smurf);

    return (
        <div>
            <h1>Add New Smurf</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        name="name"
                        placeholder="name"
                        value={smurf.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Age
                    <input
                        name="age"
                        placeholder="age"
                        value={smurf.age}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Height
                    <input
                        name="height"
                        placeholder="height"
                        value={smurf.height}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SmurfForm;