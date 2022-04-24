export default function CardBorder(props: any) {
  return (
    <div>
      <div className={props.cardBorder} style={{ style: "max-width: 18rem;" }}>
        <div className={props.cardHeader}>{props.header}</div>
        <div className={props.cardBody}>
          <h5 className={props.cardTitle}>{props.title}</h5>
          <p className={props.cardText}>{props.text}</p>
        </div>
        <div className={props.cardFooter}>{props.footer}</div>
      </div>
    </div>
  );
}
