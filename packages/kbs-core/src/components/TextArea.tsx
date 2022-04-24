import React from "react";
export default function InputTypeTextArea(props: any) {
  return (
    <div>
      <div className="mb-3 col-4">
        <label for="exampleFormControlTextarea1" class="form-label">
          {props.label}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={props.rows}
          value={props.value}
        ></textarea>
      </div>
    </div>
  );
}
