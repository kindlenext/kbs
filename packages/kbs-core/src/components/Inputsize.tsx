export default function InputSize(props: any) {
  return (
    <div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          {props.label}
        </label>
        <input
          type="text"
          className={props.sizing}
          id="formGroupExampleInput"
          placeholder={props.placeholder}
        />
        <span>Caption text ,description ,error notification</span>
      </div>
    </div>
  );
}
