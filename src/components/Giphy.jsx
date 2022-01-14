import React, {useEffect, useState} from "react";
import axios from "axios"
import Loader from "./Loader";
import Card from "./Card";

const Giphy = () => {

    const [data, setData] =useState([]);    
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true) 

            try{
                const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "TMdqSw6QfrLM4yIBy4v3foXetMoV2L48"
                }
            });

                console.log(results);
                setData(results.data.data);

            } catch (err) {
                setIsError(true)
                console.log(err)
                setTimeout(() => setIsError(false),4000)
            }           
      
            setIsLoading(false)
        }

        fetchData()
    },[]);
    
    const renderGifs = () => {
        if(isLoading){
            return <Loader />
        }
        return data.map(el => {
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
            {renderError()}
                        <div className="container gifs">
                {renderGifs()}
            </div>
        </div>);
};

export default Giphy

