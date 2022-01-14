import React from "react";

export default function Card(props){
    const gif = props.src
    console.log("working")
    return (
        <div className="gif-container">
            <div className="gif-section">
                <img src={gif} id="gifs"/>
            </div>
        </div>
    )
}