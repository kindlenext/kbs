function Collapse(props) {
  return (
    <div>
      <button
        className={`btn btn-${props.variant}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {props.label}
      </button>

      <div className="collapse" id="collapseExample">
        <div className="card card-body">{props.labelcontent}</div>
      </div>
    </div>
  );
}

export default Collapse;
