import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      let errorMessage = "An unexpected error occurred";
      let errorDetails = null;

      if (this.state.error instanceof Error) {
        errorMessage = this.state.error.message;
        errorDetails = this.state.error.stack;
      } else if (typeof this.state.error === 'string') {
        errorMessage = this.state.error;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
          <p className="text-xl mb-8">Don't worry, our quantum engineers are on it!</p>
          <p className="text-lg mb-4">Error: {errorMessage}</p>
          <Link to="/">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Return to Home Dimension
            </Button>
          </Link>
          {process.env.NODE_ENV === 'development' && errorDetails && (
            <details className="mt-4 p-4 bg-gray-800 rounded w-full max-w-2xl">
              <summary className="cursor-pointer">Error Details</summary>
              <pre className="mt-2 text-sm overflow-auto">{errorDetails}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;