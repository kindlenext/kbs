function Badge(props: any) {
  return <span className={`badge bg-${props.variant}`}>{props.label}</span>;
}

export default Badge;
