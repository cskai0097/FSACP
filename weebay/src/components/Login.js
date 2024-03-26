import React, {useContext, useState} from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const {setAuthStatus } = useContext(AuthContext);
    const navigate = useNavigate(); //import and use the useNavigate hook

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Failed to login');
            }
            
            //set Authentication Status
            setAuthStatus(true, username);
            navigate('/');
            //assuming the response contains a token
            const token = data.token
            console.log('Token: ',token)
            //you can now store the token in localStorage, state, or wherever you want
            
        } catch (error) {
            console.error('Error loggin in', error.message);
            setError('Failed to login. Please check your credentials.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label><br></br>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label><br></br>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;