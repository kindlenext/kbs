function ProgressColors(props: any) {
  return (
    <div className="progress">
      <div
        className={`progress-bar bg-${props.color}`}
        role="progressbar"
        style={`width: ${props.width}`}
        aria-valuenow={props.value}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}

export default ProgressColors;
