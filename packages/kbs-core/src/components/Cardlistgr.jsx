import React from "react";
export default function CardListGroups(props) {
  return (
    <div>
      <div className="card col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
        <div className={props.cardheader}>{props.header}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.list1}</li>
          <li className="list-group-item">{props.list2}</li>
          <li className="list-group-item">{props.list3}</li>
        </ul>
        <div className={props.cardfooter}>{props.footer}</div>
      </div>
    </div>
  );
}
