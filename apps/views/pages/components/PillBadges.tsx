function PillBadges(props: any) {
  return (
    <span className={`badge rounded-pills bg-${props.variant}`}>
      {props.label}
    </span>
  );
}
export default PillBadges;
