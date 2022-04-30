function TitlePopovers(props: any) {
  return (
    <button
      type="button"
      className={props.classNam}
      data-bs-toggle="popover"
      data-bs-placement={props.placement}
      title={props.title}
      data-bs-content={props.content}
    >
      {props.text}
    </button>
  );
}

export default TitlePopovers;
