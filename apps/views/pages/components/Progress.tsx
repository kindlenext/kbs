function Progress(props: any) {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={props.value}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
}

export default Progress;
