export default function CardLinks(props: any) {
  return (
    <div>
      <div className="card col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
          <p className="card-text">{props.text}</p>
          <a href="#" className="card-link">
            {props.link}
          </a>
          <a href="#" className="card-link">
            {props.link2}
          </a>
        </div>
      </div>
    </div>
  );
}
