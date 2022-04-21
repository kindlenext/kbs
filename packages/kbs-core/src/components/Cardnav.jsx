import React from "react";
export default function CardNavItems(props) {
  return (
    <div>
      <div className={props.card} style={{ style: "max-width: 540px;" }}>
        <div className={props.cardheader}>
          <ul className={props.nav}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                {props.li}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.li2}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                {props.li3}
              </a>
            </li>
          </ul>
        </div>

        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.img}
              className="img-fluid rounded-start"
              alt={props.alt}
            />
          </div>
          <div className="col-md-8">
            <div className={props.cardbody}>
              <h5 className={props.cardtitle}>{props.title}</h5>
              <p className={props.cardtext}>{props.text}</p>
              <a href="#" className={props.btnvariant}>
                {props.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
