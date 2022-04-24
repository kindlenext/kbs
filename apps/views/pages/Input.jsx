import {
  InputSize,
  InputSizetype,
  InputState,
  InputTypeSelect,
  InputTypeTextArea,
  InputTypeFile,
} from " kbs-core ";

export function InputPage() {
  return (
    <div className="container mt-5">
      <h2>Input size with orientation</h2>
      <div className="row">
        <div className="col-6">
          <InputSize
            label="Small"
            sizing="form-control form-control-sm"
            placeholder="Placeholder"
          />
          <InputSize
            label="Default"
            sizing="form-control "
            placeholder="Placeholder"
          />
          <InputSize
            label="Large"
            sizing="form-control form-control-lg"
            placeholder="Placeholder"
          />
        </div>
        <div className="col-6">
          <InputSizetype
            label="Small"
            sizing="form-control form-control-sm"
            placeholder="Placeholder"
          />
          <InputSizetype
            label="Default"
            sizing="form-control "
            placeholder="Placeholder"
          />
          <InputSizetype
            label="Large"
            sizing="form-control form-control-lg"
            placeholder="Placeholder"
          />
        </div>
      </div>
      <hr />
      <h2>Select size with orientation</h2>
      <hr />
      <h2>State</h2>
      <hr />
      <h2>File input</h2>
      <InputTypeFile />
      <hr />
      <h2>State</h2>
      <InputState
        label="Default"
        formControl="form-control"
        value="Placeholder"
        feedback="Caption text ,description ,error notification"
      />
      <InputState
        label="Success"
        formControl="form-control is-valid "
        value="Placeholder"
        feedback="Caption text ,description ,error notification"
      />
      <InputState
        label="Error"
        formControl="form-control is-invalid "
        value="Placeholder"
        feedback="Caption text ,description ,error notification"
      />
      <InputState
        label="Disabled"
        formControl="form-control "
        value="Placeholder"
        feedback="Caption text ,description ,error notification"
      />
      <InputState
        label="Focus"
        formControl="form-control focus "
        value="Placeholder"
        feedback="Caption text ,description ,error notification"
      />
      <hr />
      <h2>Text Area</h2>
      <InputTypeTextArea label="Default " Value="Placeholder" />
      <InputTypeTextArea
        label="Example multiple  select"
        Value="Placeholder"
        rows="3"
      />
    </div>
  );
}
