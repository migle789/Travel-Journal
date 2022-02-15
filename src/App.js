import React from "react";
import Card from "./components/Card";
import data from "./data.js";
import Nav from "./components/Nav";

export default function App () {
    const cards = data.map((item) => {
        return (
        <Card 
         key={item.id}
         title={item.title}
         location={item.location}
         link={item.link}
         startDate={item.startDate}
         endDate={item.endDate}
         description={item.description}
         img={item.img}
        />)
    })
    return ( 
        <div className="container">
            <Nav />
            <div>{cards}</div>
        </div>)
}