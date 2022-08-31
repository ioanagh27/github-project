import axios from 'axios';
import React, {useState} from 'react';
import { useEffect } from 'react';
import Card from '../Card';
import Usercard from '../Usercard';
import './index.css'

function Search() {
    
    const [username, setUsername] = useState("");
    const [showData, setShowData] = useState("");
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUsername(inputValue);
        
        // try {
        //     async function fetchRepos() {
        //         const result = await axios.get(`https://api.github.com/users/${username}/repos`)
        //         console.log(result.data)
        //         setShowData(result.data)
        //         setUsername(inputValue)
        //         setUsername('')
            
        //     }
        //     fetchRepos();
        // } catch (err) {
        //     setError(err)
        // }
    }


    return (
    <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search-box'>Search for user:</label>
                <input type="text" onChange={handleInput} value={inputValue} id="search-box" required/>
                <input type="submit" value="Search"/>
            </form>
            <Usercard user={username} />
            <Card user={showData}/>
            
            {/* { showData.map((r) => <Card key={r.name} name={r.name} stargazers_count={r.stargazers_count} open_issues_count={r.open_issues_count} forks_count={r.forks_count}/>) } */}
    </>
)
}

export default Search