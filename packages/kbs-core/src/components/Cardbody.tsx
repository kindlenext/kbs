export default function CardBody(props: any) {
  return (
    <div>
      <div className="card col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
        <div className="card-body">{props.text}</div>
      </div>
    </div>
  );
}
