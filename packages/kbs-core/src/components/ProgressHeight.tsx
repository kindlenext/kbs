function ProgressHeight(props: any) {
  return (
    <>
      <div className="progress" style={`height: ${props.topheight}`}>
        <div
          className="progress-bar"
          role="progressbar"
          style={`width: ${props.topwidth}`}
          aria-valuenow={props.topvalue}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="progress" style={`height: ${props.botttomheight}`}>
        <div
          className="progress-bar"
          role="progressbar"
          style={`width: ${props.bottomwidth}`}
          aria-valuenow={props.bottomvalue}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
}

export default ProgressHeight;
