import React from "react";
import "../Components.css"

const Servery = (props) =>  {
    return (
        <div className="servery">
            <h2>{props.name}</h2> 
            <div>
                <a target="_blank" href={props.menu}><img className="servery-image" src={props.image} alt={props.name}/></a>
            </div>
            <h3>Review: {props.review}</h3>
            <div>
                <ul class="description">
                {props.text.map(description => <li>{description}</li>)}
                </ul>
            </div>

        </div> 
    )
}

export default Servery