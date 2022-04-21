import React from "react";
export default function CardTextAlignment(props) {
  return (
    <div>
      <div className={props.cardclass}>
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
