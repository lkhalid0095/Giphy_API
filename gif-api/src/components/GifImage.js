import React from 'react';
// this component will return the gif as image
const GifImage = (image) => {
    return (
        <li>
            {/* avoid loading any big images */}
            <img src = {image.gif.images.downsized.url} alt = "gifImage"/>
        </li>
    )
};

export default GifImage;