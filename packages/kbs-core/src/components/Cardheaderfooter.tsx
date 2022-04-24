export default function CardHeaderFooter(props: any) {
  return (
    <div>
      <div className={props.cardClass}>
        <div className={props.cardHeader}>{props.header}</div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary">
            {props.button}
          </a>
        </div>
        <div className={props.cardFooter}>{props.footer}</div>
      </div>
    </div>
  );
}
