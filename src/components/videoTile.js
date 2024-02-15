import React from "react";
import '../styles/imageTile.css';

const VideoTile = (props) => {
    return (
        <div className='imageCard'>
            <iframe
                className="image"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                title={`${props.videoTitle}`}
                allowFullScreen
            ></iframe>
            <div className="imageTitle">{props.videoTitle}</div>
            <div className="imageDesc">{props.videoDesc}</div>
        </div>
    );
}

export default VideoTile;