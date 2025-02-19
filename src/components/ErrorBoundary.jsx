import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
          <p className="text-xl mb-8">Don't worry, our quantum engineers are on it!</p>
          <Link to="/">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Return to Home Dimension
            </Button>
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;