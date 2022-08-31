import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import './index.css'



function Usercard({user}) {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        async function fetchRepos() {
            if(user) {
                const result = await axios.get(`https://api.github.com/users/${user}`)            
                console.log(result.data)
                setUserData(result.data)
            } else {
                return;
            } 
        }
        fetchRepos();
    },[user])
console.log(userData)
    return (
        <div id='container'>
            <h3>{userData.login}</h3>
            <div id='user'>
                <img src={userData.avatar_url} alt=''/>
                <a href={userData.html_url}>GitHub</a>
            </div>
        </div>      
        
    )              

}

export default Usercard;