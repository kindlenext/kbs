import React from "react";
export default function InputState(props: any) {
  return (
    <div>
      <div className="col-md-4">
        <label for="validationServer01" className="form-label">
          {props.label}
        </label>
        <input
          type="text"
          className={props.formControl}
          id="validationServer01"
          value={props.value}
          required
        />
        <div className="valid-feedback">{props.feedback}</div>
      </div>
    </div>
  );
}
