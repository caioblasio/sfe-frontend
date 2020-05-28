import React, { Component } from "react";
import AppError from "components/AppError";

class HasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (ENVIRONMENT !== "production") {
      /* eslint-disable no-console */
      console.error(error);
      console.log(errorInfo);
      console.trace();
      /* eslint-enable no-console */
    }
  }

  render() {
    const { children, onError } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      if (!onError) {
        return <AppError />;
      }

      return onError(error);
    }

    return children;
  }
}

const hasErrorBoundary = (errorProps = {}) => (Component) => (props) => (
  <HasErrorBoundary {...errorProps}>
    <Component {...props} />
  </HasErrorBoundary>
);

export default hasErrorBoundary;
