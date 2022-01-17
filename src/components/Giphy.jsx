import React, {useEffect, useState} from "react";
import axios from "axios"
import Loader from "./Loader";
import Card from "./Card";
import Search from "./Search";


const Giphy = () => {

    const [data, setData] =useState([]);   
    const [filter, setFilter] = useState(25); 
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [rating, setRating] = useState("");
    const currentItems = data.slice(0, filter)
    console.log(rating)
    // const ratedItems = currentItems.filter(currentItem => currentItem.rating == filter).map(filteredItem =>{
    // };

    // const filterItem = (el) =>{ 
    //     el.filter(currentItem => currentItem.rating === !rating)
    //     .push(...currentItem, currentItems)
    // }

    // filterItem(currentItems)
    
    const changeAmount = (event) => {
        // console.log(event.target.value);
        setFilter(event.target.value)
    }



    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true) 

         

            try{
                console.log("filter value" +filter)
                const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    
                    api_key: `${process.env.REACT_APP_UNSPLASH_KEY}`
                   
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

    console.log("filter after effect" +filter)
    console.log( "after function " + rating)


    // const renderGifs = () => {
    //     if(isLoading){
    //         return <Loader />
    //     }
    //     // changed map(el) => key = {el.id} because of using same key
    //     return currentItems.map((el,index )=> {
    //         return (
    //             <Card 
    //                 //  key={el.id} 
    //                  key= {index}
    //                  src={el.images.fixed_height.url}
    //             />
    //         )
    //     })
    // }

    const rendeGifs2 = () => {
        if(isLoading){
            return <Loader />
        }

        return (
            
            currentItems
            .filter(currentItem => currentItem.rating === rating)
            .map((currentItem,index) =>{
                return (
                    
                    <Card 
                    //  key={el.id} 
                     key= {index}
                     src={currentItem.images.fixed_height.url}
                />
                )
            })
        )
    }

    // const rendeGifs2 = () => {
    //     if(isLoading){
    //         return <Loader />
    //     }

    //     return (
            
    //         currentItems
    //         .filter(currentItem => currentItem.rating === rating)
    //         .map((currentItem,index) =>{
    //             return (
                    
    //                 <Card 
    //                 //  key={el.id} 
    //                  key= {index}
    //                  src={currentItem.images.fixed_height.url}
    //             />
    //             )
    //         })
    //     )
    // }


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
// /change rating section
    //   function changeRating(val) {

    //     if (val === "none") {
    //         setRating(val.target.value)
    //         console.log("rate")
    //       
    //     }

    //     if (val === "g") {
    //         setRating(val.target.value)
    //     }

    //     if (val === "pg") {
    //         setRating(val.target.value)
    //     } 
    //     if (val === "pg-13") {
    //         setRating(val.target.value)
    //      }

    //     }

    const changeRating = (event) => {
      {event.target.value == "none" ? setRating("g"|| "pg" || "pg-13") : setRating(event.target.value)} 
    }

 


    return (
        <div>            
            <div className="container">
                {renderError()}                
                <Search 
                    setData={setData} 
                />
            {/*div for ratings and amount of gifs*/}
                <div id = "dataselect">
            {/*ratings section*/}
                <label className='rating-label'>Rating: </label>
            <select name="rating" id="rating" onChange={changeRating}>
                <option value="none">None</option>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg-13">PG-13</option>
            </select>
        {/*for rating section ends*/}
        {/*div for page view/ amount begins*/}
                <div className="pageview">
                    <label>Amount of gifs: </label>
                <input id = "inputNumber" type="number" min="25" max="50" onChange={changeAmount}></input>
                </div>
            {/*div for pageview ends*/}
                </div>
            {/*di for both ratings and amount ends*/}               
                <div className="container gifs">
                    {/* {renderGifs()}       */}
                    
                    {rendeGifs2()}              
                </div>
            </div>
        </div>);
};

export default Giphy

