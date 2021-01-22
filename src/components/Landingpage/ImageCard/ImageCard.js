import React from 'react';
import './imageCard.css'
const ImageCard = ({user}) => {
    return (
        <div className="image-card">
            <div>
                <img src={`https://source.unsplash.com/user/${user}`} alt={"Loading.."} height={245} width={255}></img>
            </div>
        </div>
    );
};

export default ImageCard;