import React from "react";
export default function CardExample(props) {
  return (
    <div>
      <div
        className="card col-xl-4 col-lg-4 col-md-6 col-sm-12 "
        style={{ style: "width: 400;" }}
      >
        <img
          src={props.img}
          className="card-img-top card-style"
          alt={props.alt}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            {props.button}
          </a>
        </div>
      </div>
    </div>
  );
}
