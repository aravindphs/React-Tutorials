import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
    return (
      <div className="bg-light p-3 mb-3" >
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <input
            className="btn mt-3"
            style={{ background: "#FFBE98" }}
            value="Submit"
            type="submit"
          />
        </div>
      </div>
    );
};

export default Form;