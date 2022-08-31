import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import './index.css'


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

function display() {
    let x = document.getElementById('display');
    if(x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}

    return (
        <>
        {repoData.map((r) => <div className='cont'>
                <button onClick={display} key={r.id}>{r.name}</button>
                <div id='display' key={r.name}>
                    <h4>Open issues: {r.open_issues_count}</h4>
                    <h4>Stargazers: {r.stargazers_count}</h4>
                    <h4>Forks: {r.forks_count}</h4>
                </div>
                
             </div>
            )} 
        </> 

    )
                

}

export default Card;