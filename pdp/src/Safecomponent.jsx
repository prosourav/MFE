import React from "react";

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  // Updates the state when an error is caught
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  // Logs the error and additional error info for debugging
  componentDidCatch(error, errorInfo) {
    console.error("Error caught in SafeComponent:", error, errorInfo);
    // You can also send this error to an external logging service if needed
  }



  render() {
   
    if (this.state.hasError) {
      
      // Display a fallback UI with an optional error message
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>
            {this.state.errorMessage
              ? `Error: ${this.state.errorMessage}`
              : "An unexpected error occurred."}
          </p>
        </div>
      );
    }

    // If no error, render children as expected
    return this.props.children;
  }
}
