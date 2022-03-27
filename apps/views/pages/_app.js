import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
