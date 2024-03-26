import React, { useState } from "react";

function Registration() {
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [ registrationSuccess, setRegistrationSuccess ] = useState(false)

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();

        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res=>res.json())
            .then(data=> {
                console.log('Registration successful', data);
                setRegistrationSuccess(true);
                //reset form data after registration.
                setFormData({
                    username: '',
                    email: '',
                    password: ''
                });  
            })
        .catch(error => {
            console.error('Error registering user: ', error);
        });
    };

    return (
        <div>
            <h2>Account Registration</h2>
            {registrationSuccess && <p style={{ color: 'green' }}>Resgistration successful! Please log in.</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label> <br></br>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label> <br></br>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label> <br></br>
                    <input type="Password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Registration;