export default function FormCheckInput(props: any) {
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type={props.typeInput}
            value={props.value}
            aria-label={props.ariaLabel}
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label={props.ariaLabel1}
        />
      </div>
    </div>
  );
}
