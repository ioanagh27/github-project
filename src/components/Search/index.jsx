import axios from 'axios';
import React, {useState} from 'react';
import { useEffect } from 'react';
import Card from '../Card';
import Usercard from '../Usercard';
import './index.css'

function Search() {
    
    const [username, setUsername] = useState("");
    const [showData, setShowData] = useState([]);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUsername(inputValue);
    }

 console.log(showData)

    return (
    <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search-box'>Search for user:</label>
                <input type="text" onChange={handleInput} value={inputValue} id="search-box" required/>
                <input type="submit" value="Search"/>
            </form>
            {!username ? <div></div> : <Usercard user={username} />}
            <Card user={username}/>
            
    </>
)
}

export default Search