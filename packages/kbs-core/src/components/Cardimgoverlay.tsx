export default function CardImageOverlay(props: any) {
  return (
    <div>
      <div className="card bg-dark text-white col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
        <img src={props.image} className="card-img" alt={props.alt} />
        <div className={props.cardOverlay}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
