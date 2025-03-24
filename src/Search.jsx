import { useState } from "react";

function Search ({setSearchTerm}) {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setSearchTerm(searchInput);
        setSearchInput("");
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <label>Enter a search term:
                <input type="text" onChange={handleChange} value={searchInput}></input>
            </label>
            <button>Search</button>
        </form>
    )
}

export default Search;