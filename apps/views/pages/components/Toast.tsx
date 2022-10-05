function Toasts(props: any) {
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <img src="" className="rounded me-2" alt="" />
        <strong className="me-auto">{props.title}</strong>
        <small>{props.time}</small>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{props.label}</div>
    </div>
  );
}

export default Toasts;
