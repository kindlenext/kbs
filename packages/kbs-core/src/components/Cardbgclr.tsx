export default function CardBackgroundColour(props: any) {
  return (
    <div>
      <div className={props.variant} style={{ style: "max-width: 18rem;" }}>
        <div className={props.cardHeader}>{props.header}</div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
