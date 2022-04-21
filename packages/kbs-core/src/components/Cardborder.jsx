import React from "react";
export default function CardBorder(props) {
  return (
    <div>
      <div className={props.cardborder} style={{ style: "max-width: 18rem;" }}>
        <div className={props.cardheader}>{props.header}</div>
        <div className={props.cardbody}>
          <h5 className={props.cardtitle}>{props.title}</h5>
          <p className={props.cardtext}>{props.text}</p>
        </div>
        <div className={props.cardfooter}>{props.footer}</div>
      </div>
    </div>
  );
}
