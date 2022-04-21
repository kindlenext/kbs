import React from "react";
export default function CardHeaderFooter(props) {
  return (
    <div>
      <div className={props.cardclass}>
        <div className={props.cardheader}>{props.header}</div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            {props.button}
          </a>
        </div>
        <div className={props.cardfooter}>{props.footer}</div>
      </div>
    </div>
  );
}
