import React, { Component } from "react";
import Broken from "../BrokenPage/Broken";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) return <Broken />;

    return this.props.children;
  }
}

export default ErrorBoundary;
