import React from "react";
export default function CardHorizontal(props) {
  return (
    <div>
      <div className={props.card} style={{ style: "max-width: 540px;" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.img}
              className="img-fluid rounded-start"
              alt={props.alt}
            />
          </div>
          <div className="col-md-8">
            <div className={props.cardbody}>
              <h5 className={props.cardtitle}>{props.title}</h5>
              <p className={props.cardtext}>{props.text}</p>
              <a href="#" className={props.btnvariant}>
                {props.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
