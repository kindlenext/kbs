import React from "react";
export default function CardKitchenSink(props) {
  return (
    <div>
      <div
        className="card col-xl-4 col-lg-4 col-md-6 col-sm-12 "
        style={{ style: "width: 18rem;" }}
      >
        <img
          src={props.img}
          className="card-img-top card-style"
          alt={props.alt}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          {/* <a href="#" className="btn btn-primary">
            {props.button}
          </a> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.list1}</li>
          <li className="list-group-item">{props.list2}</li>
          <li className="list-group-item">{props.list3}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            {props.link}
          </a>
          <a href="#" className="card-link">
            {props.link2}
          </a>
        </div>
      </div>
    </div>
  );
}
