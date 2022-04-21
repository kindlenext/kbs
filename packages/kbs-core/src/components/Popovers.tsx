function Popovers(props: any) {
  return (
    <button
      type="button"
      className={props.classNam}
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement={props.placement}
      data-bs-content={props.content}
    >
      {props.text}
    </button>
  );
}

export default Popovers;
