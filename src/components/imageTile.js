import React from "react";
import '../styles/imageTile.css';

const ImageTile = (props) => {

    return (
        <div className='imageCard'>
            <img
                className="image"
                src={props.imageUrl}
                alt={props.imageTitle}
            />
            <div className="imageTitle">{props.imageTitle}</div>
            <div className="imageDesc">{props.imageDesc}</div>
        </div>
    );
}

export default ImageTile;