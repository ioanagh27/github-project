import React from 'react';


function Card(props) {
    return (
        <>
            <h2>Repositories</h2>
            <h3>{props.name}</h3>
            <div>
                <h4>Open issues: {props.open_issues_count}</h4>
                <h4>Stargazers: {props.stargazers_count}</h4>
                <h4>Forks: {props.forks_count}</h4>
            </div>

        </>
        
        
    )
                

}

export default Card;