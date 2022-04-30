function Slides(props: any) {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
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
    </div>
  );
}

export default Slides;