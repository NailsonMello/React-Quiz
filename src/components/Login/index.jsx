import React, { useState } from 'react'
import axios from "axios";

import Button from '../Button'
import Input from '../Input'

const Login = ({ onSetUser }) => {
    const [name, setName] = useState('');
    const [erro, setError] = useState('');
    const handleLoginGitHub = async e => {
        e.preventDefault()
        try{
            const res = await axios.get(`https://api.github.com/users/${name}`);
            if (res.data) {
                const userData = {
                    avatar_url: res.data.avatar_url.split("?")[0],
                    name: res.data.name ?? res.data.login,
                    login: res.data.login,
                };
                localStorage.setItem("user", JSON.stringify(userData));
                onSetUser(userData);
                //JSON.stringify(res.data)
            }
        }catch(error){
            setError('Username invalido')
        }
    }
    return (
        <form onSubmit={(e) => handleLoginGitHub(e)}>
            <Input
                name="username"
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu username do GitHub"
                value={name}
            />
            <Button type="submit" disabled={name.length === 0}>
                {erro ? erro : 'Login'}
            </Button>
        </form>
    )
}
export default Login