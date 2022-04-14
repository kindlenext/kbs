function ProgressLabel(props: any) {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={`width: ${props.width}`}
        aria-valuenow={props.value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {props.label}
      </div>
    </div>
  );
}

export default ProgressLabel;
