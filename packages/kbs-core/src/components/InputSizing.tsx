import React from "react";
export default function InputGroupsSizing(props) {
  return (
    <div>
      <div className={props.inputClass}>
        <span className="input-group-text" id={props.id}>
          {props.label}
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby={props.size}
        />
      </div>
    </div>
  );
}
