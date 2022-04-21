import React from "react";
export default function CardBody(props) {
  return (
    <div>
      <div class="card col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
        <div class="card-body">{props.text}</div>
      </div>
    </div>
  );
}
