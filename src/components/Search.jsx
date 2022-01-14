import React, {useState} from "react";
import axios from "axios"
import Loader from "./Loader";
import Card from "./Card";


const Search = () => {
    const [data, setData] =useState([]);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

   
    const handleSearchChange = event =>{
        setSearch(event.target.value)
    }

    const handleSubmit = async event => {
            event.preventDefault();
            setIsLoading(true);
            setIsError(false);
            const results = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "TMdqSw6QfrLM4yIBy4v3foXetMoV2L48",
                    q: search
                }
            })
            console.log(search)
            console.log(results)
         setData(results.data.data); 
         setIsLoading(false)
    };

   

    const renderGifs = () => {
        if(isLoading){
            console.log("loading")
            return <Loader />
            
        }
        return data.map(el => {
           console.log("mapping")
            return (
                <Card 
                     key={el.id} 
                     src={el.images.fixed_height.url}
                />
            )
        })
    }

    const renderError = () => {
        if(isError){
            return (
                <div className="alert.alert-danger-alert-dismissible.fade show"
                     role="alert">
                         Unable to get Gifs, please try agin in a few minutes
                
                     </div>
            )
        }
    }


    return (
        
        <div className="m-2">
            {renderError}
            <form className="input-form">
              <input value={search} onChange= {handleSearchChange} type = "text" placeholder="search" className="form-control"/>
              <button onClick={handleSubmit} type="submit" className="btn">Go</button>
            </form>
            <div className="container gifs">
                {renderGifs()}
            </div>
        </div>   
    )
}

export default Search;