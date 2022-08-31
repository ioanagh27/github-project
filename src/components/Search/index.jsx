import axios from 'axios';
import React, {useState} from 'react';
import Card from '../Card';
import './index.css'

function Search() {
    
    const [username, setUsername] = useState("");
    const [showData, setShowData] = useState([]);
    const [error, setError] = useState('');

    function handleInput(e) {
        const newInput = e.target.value;
        setUsername(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!username) return;
        try {
            async function fetchRepos() {
                const result = await axios.get(`https://api.github.com/users/${username}/repos`)
                console.log(result.data)
                setShowData(result.data)
            }
            fetchRepos();
        } catch (err) {
            setError(err)
        }
        
    }


    return (
    <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search-box'>Search for user:</label>
                <input type="text" onChange={handleInput} value={username} id="search-box" required/>
                <input type="submit" value="Search"/>
            </form>
            { showData.map((r) => <Card key={r["id"]} data={r}/>) }
    </>
)
}

export default Search;