import React, { useEffect, useState }  from 'react';
import axios from 'axios';


function Card({user}) {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        async function fetchRepos() {
            if(user) {
                const result = await axios.get(`https://api.github.com/users/${user}/repos`)            
                console.log(result.data)
                setUserData(result.data)
            } else {
                return;
            } 
        }
        fetchRepos();
    },[user])

    return (
        <>
        
            <h3>{userData.name}</h3>
            <div>
                <h4>Open issues: {userData.open_issues_count}</h4>
                <h4>Stargazers: {userData.stargazers_count}</h4>
                <h4>Forks: {userData.forks_count}</h4>
            </div>

        </>
        
        
    )
                

}

export default Card;