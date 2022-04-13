function ButtonBadges(props: any) {
  return (
    <button type="button" className={`btn btn-${props.buttonvariant}`}>
      Notifications
      <span className={`badge bg-${props.labelvariant}`}>{props.label}</span>
    </button>
  );
}
export default ButtonBadges;
