function SlidesControls(props: any) {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={props.img} className="d-block w-100" alt={props.alt}>
        </div>
        <div className="carousel-item">
          <img src={props.img2} className="d-block w-100" alt={props.alt2}>
        </div>
        <div className="carousel-item">
          <img src={props.img3} className="d-block w-100" alt={props.alt3}>
        </div>
        </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
  );
}

export default SlidesControls;