import React from "react";
export default function InputSizetype(props: any) {
  return (
    <div>
      <div className=" row">
        <label for="formGroupExampleInput" className="col-sm-2 col-form-label">
          {props.label}
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className={props.sizing}
            id="formGroupExampleInput"
            placeholder={props.placeholder}
          />
          <span>Caption text ,description ,error notification</span>
        </div>
      </div>
    </div>
  );
}
