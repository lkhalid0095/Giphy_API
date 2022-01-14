import React from 'react';
import GifImage from './GifImage';
// this component will handle the data from giphy and map it as key and image
// send the key/gif as input for GifImage to return as an image.
const GifCard = (props) => {
    const gifImage = props.gifs.map((image) => {
        return <GifImage  key={image.id} gif= {image} />
    });

    return (
        <ul> {gifImage} </ul>
    );
};

export default GifCard;