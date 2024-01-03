import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img
        src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn" style={{ background: "#FFBE98" }}>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
