import PropTypes from "prop-types";

import stl from "./AlertBox.module.css";

const AlertBox = ({ varient, label, children }) => {
  const close = true;

  return (
    <div
      className={`alert alert-${varient} ${
        close && "alert-dismissible fade show"
      } ${stl.alertBox}`}
      role="alert"
    >
      {children ? children : <p>{label}</p>}
      {close && (
        <button
          type="button"
          className={`close ${stl.closeButton}`}
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="false">&times;</span>
        </button>
      )}
    </div>
  );
};

AlertBox.defaultProps = {
  varient: "primary",
};

AlertBox.propTypes = {
  varient: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
};

export default AlertBox;
