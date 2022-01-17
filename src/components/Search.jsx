import React, {useState} from "react";
import axios from "axios"


const Search = ({setData}) => {

    const [search, setSearch] = useState("");  


   
    const handleSearchChange = event =>{
        setSearch(event.target.value)
    }

    const handleSubmit = async event => {
            event.preventDefault();
             const results = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: `${process.env.REACT_APP_UNSPLASH_KEY}`,
                    q: search
                }
            })

         setData(results.data.data);    
        
    };   



    return (
        
        <div className="m-2">          
            <form className="input-form">
              <input value={search} onChange= {handleSearchChange} type = "text" placeholder="search" className="form-control"/>
              <button onClick={handleSubmit} type="submit" className="btn">Go</button>
            </form>
            

            <div className="container gifs">
                     
            </div>
        </div>   
    )
}

export default Search;