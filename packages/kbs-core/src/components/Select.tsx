import React from "react";
export default function InputTypeSelect(props: any) {
  return (
    <div>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>{props.option}</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}
