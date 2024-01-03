import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Body = () => {
    return(
        <div className="d-flex container justify-content-between">
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Body;