function Tooltips(props: any) {
  return (
    <button
      type="button"
      className={props.classNam}
      data-bs-toggle="tooltip"
      data-bs-placement={props.placement}
      title={props.title}
    >
      {props.text}
    </button>
  );
}

export default Tooltips;
