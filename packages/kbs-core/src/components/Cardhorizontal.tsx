export default function CardHorizontal(props: any) {
  return (
    <div>
      <div className={props.card} style={{ style: "max-width: 540px;" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.img}
              className="img-fluid rounded-start"
              alt={props.alt}
            />
          </div>
          <div className="col-md-8">
            <div className={props.cardBody}>
              <h5 className={props.cardTitle}>{props.title}</h5>
              <p className={props.cardText}>{props.text}</p>
              <a href="#" className={props.btnVariant}>
                {props.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
