import React, { useEffect, useState }  from 'react';
import axios from 'axios';


function Card({user}) {
    const [repoData, setRepoData] = useState([])

    useEffect(() => {
        async function fetchRepos() {
            if(user) {
                const result = await axios.get(`https://api.github.com/users/${user}/repos`)            
                console.log(result.data)
                setRepoData(result.data)
            } else {
                return;
            } 
        }
        fetchRepos();
    },[user])

    return (
        <>
        {repoData.map((r) => <h3>{r.name}</h3>
            // <div>
            //     <h4>Open issues: {r.Data.open_issues_count}</h4>
            //     <h4>Stargazers: {r.stargazers_count}</h4>
            //     <h4>Forks: {r.forks_count}</h4>
            // </div>
            )} 
        </> 

    )
                

}

export default Card;