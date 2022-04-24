import React from "react";
export default function InputGroups(props) {
  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">{props.span}</span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span className="input-group-text">{props.span1}</span>
      </div>
    </div>
  );
}
