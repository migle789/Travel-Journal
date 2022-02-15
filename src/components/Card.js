import React from "react";

export default function Card (props) {
    return  (
            <div className="card">
                <img className="img" src={require (`../images/${props.img}`)} alt="barcelona"/>
                <div className="location">
                    <div className="location-link">
                    <h3>{props.title}</h3>
                    <a className="link" href={props.link} target="_blank">View on Google maps</a>
                    </div>
                    <div className="location-para">
                        <h1 className="location-title">{props.location}</h1>
                        <h4 className="date">{props.startDate} - {props.endDate}</h4>
                        <p className="para">{props.description}</p>
                    </div>
                </div>
            </div>
    )
}