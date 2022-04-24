export default function CardImage(props: any) {
  return (
    <div>
      <div
        className="card col-xl-4 col-lg-4 col-md-6 col-sm-12 "
        style={{ style: "width: 400;" }}
      >
        <img
          src={props.img}
          className="card-img-top card-style"
          alt={props.alt}
        />
        <div className="card-body">{props.text}</div>
      </div>
    </div>
  );
}
